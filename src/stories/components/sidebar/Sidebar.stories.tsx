import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Sidebar } from "./Sidebar";

export default {
    title: 'UI Components/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args: any) => <Sidebar {...args} />;

export const Default = Template.bind({});