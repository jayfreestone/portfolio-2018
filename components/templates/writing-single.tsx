import React from 'react';
import Link from 'next/link';
import H from '../H';
import Section from '../Section';
import Prose from '../Prose';
import Image from '../Image';
import formatWritingDate from './../../utils/formatWritingDate';

const WritingSingle: React.FunctionComponent<WritingSingleProps> = ({
  children,
  meta,
}) => (
  <div className="writing-single">
    <article>
      <header className="writing-single__header">
        <H>{meta.title}</H>
        <div className="writing-single__meta">
          <time dateTime={meta.date}>
            Published {formatWritingDate(meta.date)}
          </time>
        </div>
      </header>
      <Section>
        <Prose>
          {children}
        </Prose>
      </Section>
    </article>
    <div className="writing-single__author">
      <div className="authorship">
      <Prose>
        <h3 className="authorship__title">About Jay</h3>
        <Image
          className="authorship__image"
          src="/static/img/jay-freestone-avatar.jpg"
        />
        <div className="authorship__copy">
          <p>
            I'm a front end developer living and working in East London. Currently building enterprise web-apps at Browser London. <Link href={{ pathname: '/' }}>Read full bio.</Link>
          </p>
        </div>
      </Prose>
      </div>
    </div>
  </div>
);

interface WritingSingleProps {
  meta: {
    title: string;
    date: string;
  };
}

export default WritingSingle;
