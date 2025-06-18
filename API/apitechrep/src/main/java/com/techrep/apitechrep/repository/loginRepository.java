package com.techrep.apitechrep.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.techrep.apitechrep.entity.loginEntity;



public interface loginRepository extends JpaRepository<loginEntity, Integer> {

    @Query("SELECT u FROM loginEntity u WHERE u.email = :email AND u.senha = :senha")
    Optional<loginEntity> findByEmailAndSenha(@Param("email") String email, @Param("senha") String senha);
}