package com.techrep.apitechrep.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techrep.apitechrep.entity.ProdutoEntity;



public interface ProdutoRepository extends JpaRepository<ProdutoEntity, Integer>{

}
