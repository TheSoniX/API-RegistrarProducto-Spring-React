package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository repositoryP;
	private final CategoriaRepository repositoryC;

	@Autowired
	public DatabaseLoader(ProductoRepository repositoryP, CategoriaRepository repositoryC) {
		this.repositoryP = repositoryP;
		this.repositoryC = repositoryC;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryP.save(new Producto("Leche", "Gloria", "5"));
		this.repositoryP.save(new Producto("Leche en caja","Pura Vida","7"));
		this.repositoryP.save(new Producto("Jamon Ingles","San Fernando","7 pqts"));
		this.repositoryC.save(new Categoria("Lacteo"));
		this.repositoryC.save(new Categoria("Embutidos"));
	}
}