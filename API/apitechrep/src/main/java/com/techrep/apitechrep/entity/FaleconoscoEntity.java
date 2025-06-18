package com.techrep.apitechrep.entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name = "fale_conosco")

public class FaleconoscoEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int mensagemId;
	private String nomeCompleto;
	private String email;
	private String assunto;
	private String mensagem;
	private String telefone;
	

	

public FaleconoscoEntity() {

}




public FaleconoscoEntity(int mensagemId, String nomeCompleto, String email, String assunto, String mensagem,
		String telefone) {
	super();
	this.mensagemId = mensagemId;
	this.nomeCompleto = nomeCompleto;
	this.email = email;
	this.assunto = assunto;
	this.mensagem = mensagem;
	this.telefone = telefone;
}




public int getMensagemId() {
	return mensagemId;
}




public void setMensagemId(int mensagemId) {
	this.mensagemId = mensagemId;
}




public String getNomeCompleto() {
	return nomeCompleto;
}




public void setNomeCompleto(String nomeCompleto) {
	this.nomeCompleto = nomeCompleto;
}




public String getEmail() {
	return email;
}




public void setEmail(String email) {
	this.email = email;
}




public String getAssunto() {
	return assunto;
}




public void setAssunto(String assunto) {
	this.assunto = assunto;
}




public String getMensagem() {
	return mensagem;
}




public void setMensagem(String mensagem) {
	this.mensagem = mensagem;
}




public String getTelefone() {
	return telefone;
}




public void setTelefone(String telefone) {
	this.telefone = telefone;
}

}



