import { useRouter } from 'next/router';
import Event from '../../components/Event';
import Map from '../../components/Map';

const specificevent = props => {
  if (!props.events) return null;

  const router = useRouter();
  // domain/events/[slug]
  const { slug } = router.query;
  // currently selected event
  const event = props.events[slug];
  if (!event) return null;

  const center = {
    lat: event.location.coordinates[1],
    lng: event.location.coordinates[0]
  };

  return (
    <div>
      <div className="mb-3">
        <Event event={event} />
      </div>
      <div>
        <Map events={[event]} center={center} zoom={14} />
      </div>
    </div>
  );
};

export default specificevent;
