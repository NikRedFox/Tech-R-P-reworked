package com.techrep.apitechrep.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techrep.apitechrep.entity.ClientesEntity;
import com.techrep.apitechrep.repository.ClientesRepository;

@RestController
@RequestMapping("api/perfil")
public class PerfilController {

	@Autowired
	ClientesRepository repoPerfil;

	@GetMapping
	public ResponseEntity<?> mostrarUsuario(){		
		return ResponseEntity.ok(repoPerfil.findAll());
	}
	
	@GetMapping("/{clientesId}")
	public ClientesEntity buscarClientes(@PathVariable int clientesId) {
		return repoPerfil.findById(clientesId).orElse(null);
	}
	
	@DeleteMapping("{clientesId}")
	public void excluirClientes(@PathVariable int clientesId ) {
		repoPerfil.deleteById(clientesId);
		
	}
}
	