package com.techrep.apitechrep.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techrep.apitechrep.entity.EmpresasEntity;

public interface EmpresasRepository extends JpaRepository<EmpresasEntity, Integer> {
	

}
