package com.techrep.apitechrep.entity;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name = "clientes")
public class PerfilEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int clientesId;
	private String cpf;
	private String nome;
	private String dataNasc;
	private String email;
	private String endereco;
	private String telefone;

	public PerfilEntity() {

	}

	public PerfilEntity(int clientesId,String cpf, String nome,String dataNasc, String email, String endereco,String telefone) {
		;
		this.clientesId = clientesId;
		this.cpf = cpf;
		this.nome = nome;
		this.dataNasc= dataNasc;
		this.email = email;
		this.endereco = endereco;
		this.telefone = telefone;
	}

	public int getId() {
		return clientesId;
	}

	public void setId(int clientesId) {
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
	public String getDatanasc() {
		return dataNasc;
	}

	public void setDatanasc(String dataNasc) {
		this.dataNasc = dataNasc;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}


	
	

}
