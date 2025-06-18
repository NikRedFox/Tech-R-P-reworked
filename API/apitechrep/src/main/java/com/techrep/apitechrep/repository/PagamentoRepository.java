package com.techrep.apitechrep.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techrep.apitechrep.entity.PagamentoEntity;

public interface PagamentoRepository extends JpaRepository <PagamentoEntity, Integer>{
	 List<PagamentoEntity> findByCliente_ClientesId(int clientesId);

}
