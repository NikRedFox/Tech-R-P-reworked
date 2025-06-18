/*package com.techrep.apitechrep.controller;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.techrep.apitechrep.entity.PagamentoEntity;
import com.techrep.apitechrep.repository.PagamentoRepository;

@RestController
@RequestMapping("api/pagamentos")
public class PagamentoController {

    @Autowired
    private PagamentoRepository pagamentoRepository;

    @PostMapping
    
    public ResponseEntity<String> criarPagamentos(@RequestBody PagamentoEntity pagamento) {
        pagamento.setDataPagamento(LocalDateTime.now()); //coloca a data e hora atual
        pagamentoRepository.save(pagamento); // salva no banco de dados
        return ResponseEntity.ok("Pagamento realizado com sucesso!");
    }
    
    //aqui vai buscar os pagamentos feito por um cliente
    
    @GetMapping("/cliente/{clientesId}")
    public ResponseEntity<List<PagamentoEntity>> buscarPagamentosPorCliente(@PathVariable int clientesId) {
        List<PagamentoEntity> pagamentos = pagamentoRepository.findByCliente_ClientesId(clientesId);
        return ResponseEntity.ok(pagamentos);
    }
}
*/

package com.techrep.apitechrep.controller;

import com.techrep.apitechrep.entity.LocacaoEntity;
import com.techrep.apitechrep.entity.PagamentoEntity;
import com.techrep.apitechrep.repository.LocacaoRepository;
import com.techrep.apitechrep.repository.PagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;


@RestController
@RequestMapping("api/pagamentos")
public class PagamentoController {

    @Autowired
    private PagamentoRepository pagamentoRepository;

    @Autowired
    private LocacaoRepository locacaoRepository;

    @PostMapping
    public PagamentoEntity criarPagamento(@RequestBody PagamentoEntity pagamento) {
        // Buscar locação
        int locacaoId = pagamento.getLocacao().getLocacaoId();
        LocacaoEntity locacao = locacaoRepository.findById(locacaoId)
                .orElseThrow(() -> new RuntimeException("Locação não encontrada"));

        // Associar o valor total da locação ao pagamento
        pagamento.setValorPago(locacao.getValorTotal());

        // Definir data de pagamento
        pagamento.setDataPagamento(LocalDate.now());

        // Salvar pagamento
        return pagamentoRepository.save(pagamento);
    }
}
