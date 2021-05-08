package com.devsuperior.dsvendas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired // instance will be injected automatically, dont need to use "new"
	private SaleRepository repository;
	
	// to avoid many requests, it`s a kind of cache
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true) // to not lock the db, only read
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellerRepository.findAll();
		Page<Sale> result = repository.findAll(pageable);
	
		return result.map(x -> new SaleDTO(x));
	}
}
