import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private readonly stripe = new Stripe(
    this.configService.get('STRIPE_SECRET_KEY'),
    {
      apiVersion: '2025-04-30.basil',
    },
  );
  constructor(private readonly configService: ConfigService) {}

  async createCharge(card: Stripe.PaymentMethodCreateParams.Card){
    const paymentMethod = await this.stripe.paymentMethods.create({
      type: 'card',
      card:
    })
  }
}
