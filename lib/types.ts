export type EstablishmentType = "ASOCIACIÓN" |	
                                "DISCAPACIDAD" |
                                "EMERGENCIA MÉDICA" |
                                "ENTIDAD CUIDADO DE SALUD" |
                                "ESTABLECIMIENTO" |
                                "FARMACIA" |
                                "NO IDENTIFICADA" |
                                "RED" | "RED DE FARMACIAS" |
                                "hospital" | "centro_salud" | 
                                "farmacia";

export type Establishment = {
  id: string;
  nombre: string;
  tipo: EstablishmentType;
  direccion: string;
  localidad: string;
  provincia: string;
  lat: number;
  lon: number;
};