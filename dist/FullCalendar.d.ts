import Vue from 'vue';
import { NormalizedScopedSlot } from 'vue/types/vnode';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
interface FullCalendarInternal {
    calendar: Calendar;
    scopedSlotOptions: {
        [name: string]: NormalizedScopedSlot;
    };
}
declare const FullCalendar: import("vue/types/vue").ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, {
    renderId: number;
    internal: FullCalendarInternal;
}, {
    getApi: typeof getApi;
    buildOptions: typeof buildOptions;
}, unknown, {
    options: CalendarOptions;
}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin>;
declare function buildOptions(this: {
    internal: FullCalendarInternal;
}, suppliedOptions: CalendarOptions, parent: Vue): CalendarOptions;
declare function getApi(this: {
    internal: FullCalendarInternal;
}): Calendar;
export default FullCalendar;
