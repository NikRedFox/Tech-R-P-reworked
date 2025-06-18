package com.techrep.apitechrep.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.techrep.apitechrep.entity.LoginEmpresaEntity;
import com.techrep.apitechrep.repository.LoginEmpresaRepository;

@RestController
@RequestMapping("api/empresas")
public class LoginEmpresaController {

    @Autowired
    private LoginEmpresaRepository loginEmpresaRepository;

    @GetMapping
    public ResponseEntity<?> validarLogin(@RequestParam String emailEmpresa, @RequestParam String senhaEmpresa) {
        Optional<LoginEmpresaEntity> loginOpt = loginEmpresaRepository.findByEmailEmpresaAndSenhaEmpresa(emailEmpresa, senhaEmpresa);

        if (loginOpt.isPresent()) {
            return ResponseEntity.ok(loginOpt.get());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("E-mail ou senha incorretos");
        }
    }
}
