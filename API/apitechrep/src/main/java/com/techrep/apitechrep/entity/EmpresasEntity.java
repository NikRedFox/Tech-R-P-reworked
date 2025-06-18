package com.techrep.apitechrep.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name = "empresas")

public class EmpresasEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int empresaId;
	private String cnpj;
	private String nomeEmpresa;
	private String emailEmpresa;
	private String telefoneEmpresa;
	private String cepEmpresa;
	private String enderecoEmpresa;
	private String senhaEmpresa;
	

	

public EmpresasEntity() {

}


public EmpresasEntity(int empresaId, String cnpj, String nomeEmpresa, String emailEmpresa, String telefoneEmpresa,String cepEmpresa,String enderecoEmpresa,String senhaEmpresa
		) {
	this.empresaId = empresaId;
	this.cnpj = cnpj;
	this.nomeEmpresa = nomeEmpresa;
	this.emailEmpresa = emailEmpresa;
	this.telefoneEmpresa = telefoneEmpresa;
	this.cepEmpresa = cepEmpresa;
	this.enderecoEmpresa = enderecoEmpresa;
	this.senhaEmpresa= senhaEmpresa;

	
}


public int getEmpresaId() {
	return empresaId;
}


public void setEmpresaId(int empresaId) {
	this.empresaId = empresaId;
}


public String getCnpj() {
	return cnpj;
}


public void setCnpj(String cnpj) {
	this.cnpj = cnpj;
}


public String getNomeEmpresa() {
	return nomeEmpresa;
}


public void setNomeEmpresa(String nomeEmpresa) {
	this.nomeEmpresa = nomeEmpresa;
}


public String getEmailEmpresa() {
	return emailEmpresa;
}


public void setEmailEmpresa(String emailEmpresa) {
	this.emailEmpresa = emailEmpresa;
}


public String getTelefoneEmpresa() {
	return telefoneEmpresa;
}


public void setTelefoneEmpresa(String telefoneEmpresa) {
	this.telefoneEmpresa = telefoneEmpresa;
}

public String getCepEmpresa() {
	return cepEmpresa;
}


public void setCepEmpresa(String cepEmpresa) {
	this.cepEmpresa = cepEmpresa;
}
public String getEnderecoEmpresa() {
	return enderecoEmpresa;
}


public void setEnderecoEmpresa(String enderecoEmpresa) {
	this.enderecoEmpresa = enderecoEmpresa;
}
public String getSenhaEmpresa() {
	return senhaEmpresa;
}


public void setSenhaEmpresa(String senhaEmpresa) {
	this.senhaEmpresa = senhaEmpresa;
}








}

