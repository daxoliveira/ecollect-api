import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    {title: 'Light Bulbs', image: 'lightbulbs.svg'},
    {title: 'Batteries', image: 'batteries.svg'},
    {title: 'Paper and Cardboard', image: 'paper-cardboard.svg'},
    {title: 'Electronics', image: 'electronics.svg'},
    {title: 'Organic Waste', image: 'organicwaste.svg'},
    {title: 'Kitchen Oil', image: 'kitchenoil.svg'},
  ])
}