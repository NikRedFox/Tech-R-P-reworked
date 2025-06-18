package com.techrep.apitechrep.entity;

import jakarta.persistence.*;
import java.io.Serializable;

@jakarta.persistence.Entity
@Table(name = "clientes") 
public class loginEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    
    private int clientesId;
    private String email;
    private String senha;


    public loginEntity() {
    	
    }

    public loginEntity(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }

    public int getId() {
        return clientesId;
    }

    public void setId(int clientesId) {
        this.clientesId = clientesId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String emailUsuario) {
        this.email = emailUsuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}