package com.techrep.apitechrep.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "pagamentos")
public class PagamentoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int pagamentoId;

    private String numeroCartao;
    private String nomeTitular;
    private String validade;
    private String cvv;
    private String tipoCartao;

    private LocalDate dataPagamento;

    @ManyToOne
    @JoinColumn(name = "clientes_id") // nome da coluna no banco
    private ClientesEntity cliente;

    @ManyToOne
    @JoinColumn(name = "locacao_id") // chave estrangeira para locacao
    private LocacaoEntity locacao;
    
    @Column(name = "valor_pago", precision = 10, scale = 2)
    private BigDecimal valorPago;

    // CONSTRUTORES
    public PagamentoEntity() {
    }

    public PagamentoEntity(int pagamentoId, String numeroCartao, String nomeTitular,
                           String validade, String cvv, String tipoCartao, LocalDate dataPagamento,
                           BigDecimal valorPago, LocacaoEntity locacao, ClientesEntity cliente) {
        this.pagamentoId = pagamentoId;
        this.numeroCartao = numeroCartao;
        this.nomeTitular = nomeTitular;
        this.validade = validade;
        this.cvv = cvv;
        this.tipoCartao = tipoCartao;
        this.dataPagamento = dataPagamento;
        this.locacao = locacao;
        this.valorPago = valorPago;
        this.cliente = cliente;
    }

    // GETTERS E SETTERS

    public int getPagamentoId() {
        return pagamentoId;
    }

    public void setPagamentoId(int pagamentoId) {
        this.pagamentoId = pagamentoId;
    }

    public String getNumeroCartao() {
        return numeroCartao;
    }

    public void setNumeroCartao(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    public String getNomeTitular() {
        return nomeTitular;
    }

    public void setNomeTitular(String nomeTitular) {
        this.nomeTitular = nomeTitular;
    }

    public String getValidade() {
        return validade;
    }

    public void setValidade(String validade) {
        this.validade = validade;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public String getTipoCartao() {
        return tipoCartao;
    }

    public void setTipoCartao(String tipoCartao) {
        this.tipoCartao = tipoCartao;
    }

    public LocalDate getDataPagamento() {
        return dataPagamento;
    }

    public void setDataPagamento(LocalDate dataPagamento) {
        this.dataPagamento = dataPagamento;
    }


    public LocacaoEntity getLocacao() {
        return locacao;
    }

    public void setLocacao(LocacaoEntity locacao) {
        this.locacao = locacao;
    }
    
    public BigDecimal getValorPago() {
        return valorPago;
        }

        public void setValorPago(BigDecimal valorPago) {
        this.valorPago = valorPago;
       }
        
        public ClientesEntity getCliente() {
            return cliente;
        }

        public void setCliente(ClientesEntity cliente) {
            this.cliente = cliente;
        }
        
}
