import EventTimelineItem from "./EventTimelineItem";

export default function EventTimeline({ events }) {
  if (!events || events.length === 0) {
    return (
      <p className="text-center text-slate-400 italic py-12">
        No hay más eventos próximos por ahora.
      </p>
    );
  }

  return (
    <section className="space-y-8 relative">
      {/* Vertical line */}
      <div className="hidden md:block absolute left-[104px] top-0 bottom-0 w-px bg-slate-200" />
      {events.map((ev) => (
        <EventTimelineItem key={ev.id} event={ev} />
      ))}
    </section>
  );
}
