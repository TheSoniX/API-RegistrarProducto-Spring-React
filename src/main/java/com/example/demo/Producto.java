package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Producto {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String marca;
	private String cantidad;

	private Producto() {}

	public Producto(String nombre, String marca, String cantidad) {
		this.nombre = nombre;
		this.marca = marca;
		this.cantidad = cantidad;
	}

	

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Producto producto = (Producto) o;
		return Objects.equals(id, producto.id) &&
			Objects.equals(nombre, producto.nombre) &&
			Objects.equals(marca, producto.marca) &&
			Objects.equals(cantidad, producto.cantidad);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, marca, cantidad);
	}


	@Override
	public String toString() {
		return "Producto{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", marca='" + marca + '\'' +
			", cantidad='" + cantidad + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getCantidad() {
		return cantidad;
	}

	public void setCantidad(String cantidad) {
		this.cantidad = cantidad;
	}

	
}