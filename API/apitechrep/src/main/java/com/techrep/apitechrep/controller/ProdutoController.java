package com.techrep.apitechrep.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techrep.apitechrep.entity.ProdutoEntity;
import com.techrep.apitechrep.repository.ProdutoRepository;

@RestController
@RequestMapping("api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtosRepository;

    @GetMapping
    public List<ProdutoEntity> listarProdutos() {
        return produtosRepository.findAll();
    }

}
