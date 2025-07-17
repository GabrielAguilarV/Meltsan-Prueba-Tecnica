package com.gabriel.Prueba_Tecnica_BackEnd.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;

@OpenAPIDefinition(
    info = @io.swagger.v3.oas.annotations.info.Info(
        title = "Prueba Tecnica BackEnd API",
        version = "1.0",
        description = "API for managing products in the Prueba Tecnica BackEnd application",
            contact = @Contact(
                name = "Gabriel",
                email = "gabrieledilser@gmail.com"
            )
    ),
    servers = @io.swagger.v3.oas.annotations.servers.Server(
        url = "http://localhost:8080",
        description = "Local server"
    )
)
public class SwaggerConfig {

}
