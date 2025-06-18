package com.techrep.apitechrep.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name = "clientes")

public class ClientesEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int clientesId;
	private String cpf;
	private String nome;
	private String dataNasc;
	private String email;
	private String senha;
	private String telefone;
	private String cep;
	private String endereco;
	

public ClientesEntity() {

}


public ClientesEntity(int clientesId, String cpf, String nome, String dataNasc, String email,String senha,String telefone,String cep, String endereco
		) {
	this.clientesId = clientesId;
	this.cpf = cpf;
	this.nome = nome;
	this.dataNasc = dataNasc;
	this.email = email;
	this.senha = senha;
	this.telefone = telefone;
	this.cep = cep;
	this.endereco = endereco;
	
}


public int getClientesId() {
	return clientesId;
}


public void setClientesId(int clientesId) {
	this.clientesId = clientesId;
}


public String getCpf() {
	return cpf;
}


public void setCpf(String cpf) {
	this.cpf = cpf;
}


public String getNome() {
	return nome;
}


public void setNome(String nome) {
	this.nome = nome;
}


public String getDataNasc() {
	return dataNasc;
}


public void setDataNasc(String dataNasc) {
	this.dataNasc = dataNasc;
}


public String getEmail() {
	return email;
}


public void setEmail(String email) {
	this.email = email;
}

public String getSenha() {
	return senha;
}


public void setSenha(String senha) {
	this.senha = senha;
}
public String getTelefone() {
	return telefone;
}


public void setTelefone(String telefone) {
	this.telefone = telefone;
}
public String getCep() {
	return cep;
}


public void setCep(String cep) {
	this.cep = cep;
}


public String getEndereco() {
	return endereco;
}


public void setEndereco(String endereco) {
	this.endereco = endereco;
}



}

