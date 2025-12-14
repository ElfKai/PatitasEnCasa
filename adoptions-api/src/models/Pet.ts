export interface Pet {
    id?: number;
    name: string;
    birth_date?: Date;
    description?: string;

    // Foreign Keys
    shelter_id: number;
    breed_id?: number;

    // Status (Enum values)
    adoption_status: 'available' | 'in_process' | 'pending' | 'approved' | 'rejected' | 'adopted';

    //JSONB
    health_info: {
        sterilized?: boolean;
        vaccines?: string[];
        special_needs?: boolean;
        notes?: string;

    };

    created_at?: Date;
}   