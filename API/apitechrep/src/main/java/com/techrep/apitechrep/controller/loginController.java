package com.techrep.apitechrep.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techrep.apitechrep.entity.loginEntity;
import com.techrep.apitechrep.repository.loginRepository;

@RestController
@RequestMapping("api/login")
public class loginController {
	@Autowired
    private loginRepository repoLogin;

    @GetMapping
    public ResponseEntity<?> validarLogin(@RequestParam String email, @RequestParam String senha) {
        Optional<loginEntity> loginOpt = repoLogin.findByEmailAndSenha(email, senha);

        if (loginOpt.isPresent()) {
        	loginEntity login = loginOpt.get();
            return ResponseEntity.ok(login);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("E-mail ou senha incorretos");
        }
    }
}