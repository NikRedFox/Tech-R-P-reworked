/*package com.techrep.apitechrep.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.techrep.apitechrep.entity.LocacaoEntity;
import com.techrep.apitechrep.repository.LocacaoRepository;

@RestController
@RequestMapping("api/locacao")
public class LocacaoController {

    private final LocacaoRepository locacaoRepository;

    public LocacaoController(LocacaoRepository locacaoRepository) {
        this.locacaoRepository = locacaoRepository;
    }

    @PostMapping
    public LocacaoEntity criarLocacao(@RequestBody LocacaoEntity locacao) {
        return locacaoRepository.save(locacao);
    }
} */

package com.techrep.apitechrep.controller;


import com.techrep.apitechrep.entity.LocacaoEntity;
import com.techrep.apitechrep.entity.ProdutoEntity;
import com.techrep.apitechrep.entity.ClientesEntity; 

import com.techrep.apitechrep.repository.LocacaoRepository;
import com.techrep.apitechrep.repository.ProdutoRepository;
import com.techrep.apitechrep.repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;

import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/locacoes")
public class LocacaoController {

    @Autowired
    private LocacaoRepository locacaoRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private ClientesRepository clienteRepository;
    
    @GetMapping
    public List<LocacaoEntity> listarEmpresas() {
        return locacaoRepository.findAll();
    }
	@GetMapping("/{locacaoId}")
	public LocacaoEntity buscarLocacoes(@PathVariable int locacaoId) {
		return locacaoRepository.findById(locacaoId).orElse(null);
	}
	

    @PostMapping
    public LocacaoEntity criarLocacao(@RequestBody LocacaoEntity locacao) {
        // Verifica se cliente existe
        Optional<ClientesEntity> clienteOpt = clienteRepository.findById(locacao.getClientesId());
        if (clienteOpt.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado");

        }
        //ClientesEntity cliente = clienteOpt.get();

        // Validação de cliente com CPF: apenas 1 notebook por vez
        /*if (cliente.getCpf() != null && locacao.getQuantidade() > 1) {
            throw new RuntimeException("Clientes com CPF (físicos) só podem alugar 1 notebook por vez.");
        }*/

        // Verifica se o produto existe
        Optional<ProdutoEntity> produtoOpt = produtoRepository.findById(locacao.getProdutoId());
        if (produtoOpt.isEmpty()) {
            throw new RuntimeException("Produto não encontrado");
        }
        ProdutoEntity produto = produtoOpt.get();

        // Verifica se o produto já está alugado nas datas informadas
        List<LocacaoEntity> conflitos = locacaoRepository.findByProdutoIdAndDataFimGreaterThanEqualAndDataInicioLessThanEqual(
                locacao.getProdutoId(),
                locacao.getDataInicio(),
                locacao.getDataFim()
        );

        if (!conflitos.isEmpty()) {
            locacao.setStatusLocacao("INDISPONIVEL");
            throw new RuntimeException("Produto já alugado nas datas informadas.");
        } else {
            locacao.setStatusLocacao("DISPONIVEL");
        }

        // Calcula número de dias
        long dias = ChronoUnit.DAYS.between(locacao.getDataInicio(), locacao.getDataFim());
        if (dias <= 0) {
            dias = 1;
        }

        // Calcula valor total
        BigDecimal valorTotal = produto.getPrecoDia()
                .multiply(BigDecimal.valueOf(dias))
                .multiply(BigDecimal.valueOf(locacao.getQuantidade()));
        
        System.out.println("Preço por dia do produto: " + produto.getPrecoDia());
        System.out.println("Quantidade: " + locacao.getQuantidade());
        System.out.println("Valor total calculado: " + valorTotal);

        locacao.setValorTotal(valorTotal);

        return locacaoRepository.save(locacao);
}
}
