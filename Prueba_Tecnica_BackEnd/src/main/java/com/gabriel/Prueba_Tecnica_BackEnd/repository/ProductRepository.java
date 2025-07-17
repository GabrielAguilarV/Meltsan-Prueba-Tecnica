package com.gabriel.Prueba_Tecnica_BackEnd.repository;

import com.gabriel.Prueba_Tecnica_BackEnd.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByNombreContainsIgnoreCase(String categoria);

    Optional<Product> findByNombre(String nombre);
}
