<script setup lang="ts">
import CalendarEvent from '@/components/CalendarEvent.vue'
import type { CalendarEventProps } from '@/components/CalendarEvent.vue'

const events: CalendarEventProps[] = [
  {
    icon: 'pi-list-check',
    name: 'Team Evaluation',
    color: 'text-green-500',
    date: new Date(2025, 4, 3, 9, 0, 0),
    location: {
      name: 'Nathaniel Witherell, 70 Parsonage Rd, Greenwich, CT',
      directionsUrl:
        'https://www.google.com/maps/dir//70+Parsonage+Rd,+Greenwich,+CT+06830/@41.0591791,-73.7078185,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c2a29ee34c889f:0xc19c8cee93192ccb!2m2!1d-73.6254177!2d41.0592084',
    },
  },
  {
    icon: 'pi-calendar',
    name: 'Westport Dog Festival',
    color: 'text-red-500',
    date: new Date(2025, 4, 18, 10, 0, 0),
    location: {
      name: 'Winslow Park, 25 CT-136, Westport, CT 06880',
      directionsUrl:
        'https://www.google.com/maps/dir//25+CT-136,+Westport,+CT+06880/@41.1417632,-73.4356245,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e81b73ff04ca73:0x5c6c545f097fdb96!2m2!1d-73.3532237!2d41.1417926',
    },
    eventSiteUrl: 'https://www.westportwestonchamber.com/dogs',
    signupFormUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSdk7NWFeIpBazh4o-fV86nVdxxVT35swpXjq3sbcZjpauHRwA/viewform',
  },
  {
    icon: 'pi-list-check',
    name: 'Team Evaluation',
    color: 'text-green-500',
    date: new Date(2025, 5, 7, 9, 0, 0),
    location: {
      name: "St. Mark's Episcopal Church, 111 Oenoke Ridge, New Canaan, CT",
      directionsUrl:
        'https://www.google.com/maps/dir//111+Oenoke+Ridge,+New+Canaan,+CT+06840/@41.1524428,-73.5808661,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c2a639651f89e5:0x23e13b1c92eef7a1!2m2!1d-73.4984782!2d41.1524691',
    },
  },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div
      class="flex flex-col gap-4 rounded-xl border border-slate-300 bg-white p-4 text-base text-slate-700"
    >
      <div class="text-base">
        <div class="text-lg font-bold">Welcome</div>
        <span class="font-bold">Pet Partners of Fairfield County</span> is a group of active
        registered Pet Partners teams that reside in Fairfield County, CT. We support members, aim
        to improve physical and mental health, and foster the human-animal bond through visits,
        networking, and mentoring.
      </div>
    </div>
    <div
      class="flex flex-col gap-4 rounded-xl border border-slate-300 bg-white p-4 text-base text-slate-700"
    >
      <span class="text-lg font-bold">Upcoming Events</span>
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-3">
          <CalendarEvent
            v-for="(event, index) in events"
            :key="index"
            :icon="event.icon"
            :color="event.color"
            :name="event.name"
            :date="event.date"
            :location="event.location"
            :eventSiteUrl="event.eventSiteUrl"
            :signupFormUrl="event.signupFormUrl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
