package com.techrep.apitechrep.entity;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "empresas") 
public class LoginEmpresaEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int empresaId;

    private String emailEmpresa;
    private String senhaEmpresa;

    public LoginEmpresaEntity() {
    }

    public LoginEmpresaEntity(String emailEmpresa, String senhaEmpresa) {
        this.emailEmpresa = emailEmpresa;
        this.senhaEmpresa = senhaEmpresa;
    }

    public int getEmpresaId() {
        return empresaId;
    }

    public void setEmpresaId(int empresaId) {
        this.empresaId = empresaId;
    }

    public String getEmailEmpresa() {
        return emailEmpresa;
    }

    public void setEmailEmpresa(String emailEmpresa) {
        this.emailEmpresa = emailEmpresa;
    }

    public String getSenhaEmpresa() {
        return senhaEmpresa;
    }

    public void setSenhaEmpresa(String senhaEmpresa) {
        this.senhaEmpresa = senhaEmpresa;
    }
}
