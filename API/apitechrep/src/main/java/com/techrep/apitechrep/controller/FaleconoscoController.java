/*package com.techrep.apitechrep.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.techrep.apitechrep.entity.FaleconoscoEntity;
import com.techrep.apitechrep.repository.FaleconoscoRepository;


@RestController
@RequestMapping("api/fale-conosco")
public class FaleconoscoController {
	private FaleconoscoRepository faleconoscoRepository;
	@PostMapping
	
	public FaleconoscoEntity criarMensagens(@RequestBody FaleconoscoEntity mensagem) {
		return faleconoscoRepository.save(mensagem);
	}
} */

package com.techrep.apitechrep.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techrep.apitechrep.entity.FaleconoscoEntity;
import com.techrep.apitechrep.repository.FaleconoscoRepository;

@RestController
@RequestMapping("api/fale-conosco")
public class FaleconoscoController {

    private final FaleconoscoRepository faleconoscoRepository;

    public FaleconoscoController(FaleconoscoRepository faleconoscoRepository) {
        this.faleconoscoRepository = faleconoscoRepository;
    }

    @PostMapping
    public FaleconoscoEntity criarMensagens(@RequestBody FaleconoscoEntity mensagem) {
        return faleconoscoRepository.save(mensagem);
    }
}

