import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel } from "./Carousel";
import { CardCarousel } from "./card-carousel/CardCarousel";

export default {
    title: 'UI Components/Carousel',
    component: Carousel,
} as ComponentMeta<typeof Carousel>;

const DefaultTemplate: ComponentStory<typeof Carousel> = (args: any) => <Carousel {...args} />
export const Default = DefaultTemplate.bind({});

const CardTemplate: ComponentStory<typeof CardCarousel> = (args: any) => <CardCarousel {...args} />
export const Card = CardTemplate.bind({});