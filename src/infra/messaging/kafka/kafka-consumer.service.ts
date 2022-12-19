import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
    extends ServerKafka
    implements OnModuleDestroy
{
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['main-meerkat-5032-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username:
                        'bWFpbi1tZWVya2F0LTUwMzIk_YShAZUhmzuWKoAg0pyREtd0DLQXADIjPe0z3C0',
                    password:
                        'qIEAgEOPWBWw0yDYPAQGDObREjbH0f3YtVn-wkMEFHFYMMkLH-Sfqvq7o1i7gI-24TR2SQ==',
                },
                ssl: true,
            },
        });
    }

    async onModuleDestroy() {
        await this.close();
    }
}
