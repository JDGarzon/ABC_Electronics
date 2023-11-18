package com.edu.icesi.taller3.config;

import java.io.IOException;

import org.json.JSONObject;
import com.edu.icesi.taller3.persistence.models.CustomerMDB;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;

public class JacksonConfig {

    public ObjectMapper objectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();

        // Crear un módulo personalizado y registrar el serializador
        SimpleModule module = new SimpleModule();
        module.addDeserializer(CustomerMDB.class, new CustomerMDBDeserializer());
        module.addSerializer(CustomerMDB.class, new CustomerMDBtSerializer());

        objectMapper.registerModule(module);
        return objectMapper;
    }

    public class CustomerMDBtSerializer extends StdSerializer<CustomerMDB> {

        public CustomerMDBtSerializer() {
            this(null);
        }

        public CustomerMDBtSerializer(Class<CustomerMDB> t) {
            super(t);
        }

        @Override
        public void serialize(CustomerMDB value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
            gen.writeStartObject();
            gen.writeStringField("customerId", value.getCustomerId());
            JSONObject json = new JSONObject(value.getData());
            gen.writeStringField("data", json.toString());
            gen.writeEndObject();
            System.out.println("CUSTOMER SERIALIZADO");
            gen.close();
        }

    }

    public class CustomerMDBDeserializer extends StdDeserializer<CustomerMDB> {

        public CustomerMDBDeserializer() {
            this(null);
        }

        public CustomerMDBDeserializer(Class<?> vc) {
            super(vc);
        }

        @Override
        public CustomerMDB deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException {
            System.out.println("CUSTOMER DESERIALIZADO");
            JsonNode node = jp.getCodec().readTree(jp);

            String customerId = node.get("customerId").asText();
            // Aquí puedes manejar la deserialización de la propiedad "data"
            String dataAsString = node.get("data").asText();
            // Convierte la cadena JSON a un objeto JSONObject
            JSONObject data = new JSONObject(dataAsString);

            // Ahora, crea una instancia de CustomerMDB con los valores deserializados
            CustomerMDB customer = new CustomerMDB();
            customer.setCustomerId(customerId);
            // Establece el objeto JSONObject en la propiedad "data"
            // Ten en cuenta que aquí estás asumiendo que la propiedad "data" en el JSON es
            // un objeto JSON completo.
            // Si "data" es un arreglo o tiene una estructura diferente, necesitarás adaptar
            // este código.
            customer.setData(data.toMap());

            return customer;
        }
    }

}
