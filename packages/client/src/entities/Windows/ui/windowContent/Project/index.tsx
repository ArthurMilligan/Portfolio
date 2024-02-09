import { Heading, Icon, Link, Switcher, Text, TextWithIcon } from '@ui';
import { useState, type FC } from 'react';
import s from './project.module.scss';
import { type IProject } from '../../../model';
import { addBrToText } from '../../../utils';

const values = [
  { label: 'about', name: 'описание' },
  { label: 'preview', name: 'превью' },
];

const Project: FC<IProject> = ({
  name,
  description,
  tasks,
  stack,
  projectUrl,
  codeUrl,
  projectType,
  icon,
}) => {
  const [switcher, setSwitcher] = useState('about');

  return (
    <div className={s.project}>
      <div className={s.project__switcher}>
        <Switcher
          values={values}
          current={switcher}
          setCurrent={setSwitcher}
          name='projectSwitcher'
          id='projectSwitcher'
        />
      </div>

      {switcher === 'preview' && (
        <div className={s.project__frameContainer}>
          <iframe className={s.project__frame} title={name} src={projectUrl} />
        </div>
      )}
      {switcher === 'about' && (
        <div className={s.project__about}>
          <Heading className={s.project__heading1} level={1}>
            {name}
            <Icon name={icon} size={40} />
          </Heading>
          <Heading className={s.project__heading2} level={2}>
            Описание
          </Heading>
          <div className={s.project__description}>
            <span>
              <Text>Тип проекта: </Text>
              <Text bold>{projectType}</Text>
            </span>

            <Text className={s.project__descriptionText}>
              {addBrToText(description)}
            </Text>
            <span>
              <Text bold>Ссылка </Text>
              <Link href={codeUrl}>
                <Text>{codeUrl}</Text>
              </Link>
            </span>
          </div>

          <Heading className={s.project__heading2} level={2}>
            Задачи
          </Heading>
          {tasks?.map((task) => (
            <TextWithIcon className={s.project__listElement} iconName='star'>
              {task}
            </TextWithIcon>
          ))}
          <Heading className={s.project__heading2} level={2}>
            Стек
          </Heading>
          {stack?.map((item) => (
            <TextWithIcon className={s.project__listElement} iconName='star'>
              {item}
            </TextWithIcon>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
