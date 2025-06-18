package com.techrep.apitechrep.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.techrep.apitechrep.entity.EmpresasEntity;

import com.techrep.apitechrep.repository.EmpresasRepository;

@RestController
@RequestMapping("api/empresa")
public class EmpresasController {

    @Autowired
    private EmpresasRepository empresasRepository;

    @PostMapping
    public EmpresasEntity criarEmpresas(@RequestBody EmpresasEntity empresas) {
        return empresasRepository.save(empresas);
    }

    @GetMapping
    public List<EmpresasEntity> listarEmpresas() {
        return empresasRepository.findAll();
    }

    @GetMapping("/{empresaId}")
    public EmpresasEntity buscarEmpresas(@PathVariable int empresaId) {
        return empresasRepository.findById(empresaId).orElse(null);
    }

    @DeleteMapping("{empresaId}")
    public void excluirEmpresas(@PathVariable int empresaId) {
        empresasRepository.deleteById(empresaId);
    }
}
