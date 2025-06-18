package com.techrep.apitechrep.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.techrep.apitechrep.entity.PerfilEntity;
@org.springframework.stereotype.Repository
public interface PerfilRepository extends JpaRepository<PerfilEntity, Integer>{

}