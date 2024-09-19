import Link from 'next/link';
import React from 'react';

const Tags = () => {
    return (
        <div className="widget fm-widget widget-category   mb-40">
        <h4 className="fm-widget-heading-1-6 mb-20">Tags</h4>
        <div className="tagcloud">
          <Link href="/movie">Web Development</Link>
          <Link href="/movie">App Development</Link>
          <Link href="/movie">UI / UX</Link>
          <Link href="/movie">Video Editing</Link>
          <Link href="/movie">Scripting</Link>
          <Link href="/movie">Camera Techniques</Link>
          <Link href="/movie">2D Animation</Link>
          <Link href="/movie">3D Animation</Link>
          <Link href="/movie">Music Composition</Link>
          <Link href="/movie">Sound Design</Link>
          <Link href="/movie">Design Fundamentals</Link>
          <Link href="/movie">Software Skills</Link>
          <Link href="/movie">Project-Based Learning</Link>
          <Link href="/movie">Camera Basics</Link>
          <Link href="/movie">Specialized Photography</Link>
          <Link href="/movie">Post-Processing</Link>
          <Link href="/movie">Digital Marketing</Link>
          <Link href="/movie">Offline Marketing</Link>
          <Link href="/movie">Content Marketing</Link>
          <Link href="/movie">Event Planning</Link>
          <Link href="/movie">Event Production</Link>
          <Link href="/movie">Event Marketing</Link>
          <Link href="/movie">Pre-Production</Link>
          <Link href="/movie">Production</Link>
          <Link href="/movie">Post-Production</Link>
          <Link href="/movie">PR Fundamentals</Link>
          <Link href="/movie">Content Creation</Link>
          <Link href="/movie">PR Analytics</Link>

        </div>
      </div>
    );
};

export default Tags;