import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from "./Dropdown";

export default {
    title: 'UI Components/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: any) => <Dropdown {...args} />;

export const Default = Template.bind({});