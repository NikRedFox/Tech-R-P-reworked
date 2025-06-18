package com.techrep.apitechrep.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.data.jpa.repository.JpaRepository;
import com.techrep.apitechrep.entity.LoginEmpresaEntity;

public interface LoginEmpresaRepository extends JpaRepository<LoginEmpresaEntity, Integer> {

    @Query("SELECT l FROM LoginEmpresaEntity l WHERE l.emailEmpresa = :emailEmpresa AND l.senhaEmpresa = :senhaEmpresa")
    Optional<LoginEmpresaEntity> findByEmailEmpresaAndSenhaEmpresa(
        @Param("emailEmpresa") String emailEmpresa,
        @Param("senhaEmpresa") String senhaEmpresa
    );

}
