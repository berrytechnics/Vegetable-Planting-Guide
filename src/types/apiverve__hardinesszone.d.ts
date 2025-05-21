declare module '@apiverve/hardinesszone' {
  export interface HardinessZoneOptions {
    apiKey: string;
  }

  export interface HardinessZoneResult {
    zone: string;
    temperature_range: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  }

  export class HardinessZone {
    constructor(options: HardinessZoneOptions);
    lookup(params: { zipcode: string }): Promise<HardinessZoneResult>;
  }
}
