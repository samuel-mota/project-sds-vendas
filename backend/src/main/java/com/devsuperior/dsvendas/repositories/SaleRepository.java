package com.devsuperior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsvendas.entities.Sale;

// DATA OPERATIONS

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
