export interface Noticia {
    titulo: string;
    subtitulo: string;
    numero?: number;
}

export interface Marca {
    nombre: string;
    numero: number;
    descripcion?: string;
}

export interface Categoria {
    nombre: string;
    descripcion: string;
    imagen?: string;
}