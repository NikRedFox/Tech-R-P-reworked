package com.techrep.apitechrep.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techrep.apitechrep.entity.ClientesEntity;
import com.techrep.apitechrep.repository.ClientesRepository;

@RestController
@RequestMapping("api/cadastro")

public class ClientesController {
	
	
	/*@GetMapping
	public String mensagem() {
		return "Olá Mundo";
	} */
	
	@Autowired
	
	private ClientesRepository clientesRepository;
	
	/* classe primeira letra maiuscula e objeto primeira letra minúscula       */
	
	@PostMapping
	
	public ClientesEntity criarClientes(@RequestBody ClientesEntity clientes) {
		return clientesRepository.save(clientes);
	}
	
	@GetMapping
	
	public List<ClientesEntity> listarClientes(){
		return clientesRepository.findAll();
	}
	
	
	@GetMapping("/{clientesId}")
	public ClientesEntity buscarClientes(@PathVariable int clientesId) {
		return clientesRepository.findById(clientesId).orElse(null);
	}
	
	@DeleteMapping("{clientesId}")
	public void excluirClientes(@PathVariable int clientesId ) {
		clientesRepository.deleteById(clientesId);
		
	}
	
}
