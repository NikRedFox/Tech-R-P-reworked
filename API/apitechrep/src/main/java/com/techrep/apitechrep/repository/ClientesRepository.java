package com.techrep.apitechrep.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techrep.apitechrep.entity.ClientesEntity;

public interface ClientesRepository extends JpaRepository<ClientesEntity, Integer> {

}
