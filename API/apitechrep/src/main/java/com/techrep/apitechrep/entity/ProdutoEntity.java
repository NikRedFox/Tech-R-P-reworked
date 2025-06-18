package com.techrep.apitechrep.entity;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "produtos")
public class ProdutoEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int produtoId;

    private String nomeProduto;
    private int quantidade;
    private String processador;
    private String memoriaRam;
    private String armazenamento;
    private String statusProduto;

    @Column(name = "preco_dia", precision = 10, scale = 2)
    private BigDecimal precoDia;

    public ProdutoEntity() {
    }

    public ProdutoEntity(int produtoId, String nomeProduto, int quantidade,
                         String processador, String memoriaRam, String armazenamento,
                         String statusProduto, BigDecimal precoDia) {
        this.produtoId = produtoId;
        this.nomeProduto = nomeProduto;
        this.quantidade = quantidade;
        this.processador = processador;
        this.memoriaRam = memoriaRam;
        this.armazenamento = armazenamento;
        this.statusProduto = statusProduto;
        this.precoDia = precoDia;
    }

    public int getProdutoId() {
        return produtoId;
    }

    public void setProdutoId(int produtoId) {
        this.produtoId = produtoId;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public String getProcessador() {
        return processador;
    }

    public void setProcessador(String processador) {
        this.processador = processador;
    }

    public String getMemoriaRam() {
        return memoriaRam;
    }

    public void setMemoriaRam(String memoriaRam) {
        this.memoriaRam = memoriaRam;
    }

    public String getArmazenamento() {
        return armazenamento;
    }

    public void setArmazenamento(String armazenamento) {
        this.armazenamento = armazenamento;
    }

    public String getStatusProduto() {
        return statusProduto;
    }

    public void setStatusProduto(String statusProduto) {
        this.statusProduto = statusProduto;
    }
    
    public BigDecimal getPrecoDia() {
        return precoDia;
    }

    // SETTER FALTANDO: adicione este!
    public void setPrecoDia(BigDecimal precoDia) {
        this.precoDia = precoDia;
    }
    

	

  
}
