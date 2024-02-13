import { type FC } from 'react';
import {
  ArrayComponentsDecorator,
  Heading,
  Link,
  Loadbar,
  Text,
  TextWithIcon,
} from '@ui';
import uuid from 'react-uuid';
import { sortSkills } from '../../../utils';
import { type IProfile } from '../../../model';
import s from './profile.module.scss';

const Profile: FC<IProfile> = ({
  name,
  avatar,
  age,
  about,
  mail,
  gitHub,
  telegram,
  proffesion,
  experience,
  education,
  additionalEducation,
  keySkills,
  hardSkills,
  achievements,
  softSkills,
  hobbys,
}) => {
  const intl = new Intl.DateTimeFormat('ru');
  const fromatDate = (date: Date): string => intl.format(new Date(date));

  return (
    <div className={s.profile}>
      <Heading>Портфолио</Heading>
      <Heading level={2}>Общая информация</Heading>
      <div className={s.profile__info}>
        <div className={s.profile__photo}>
          <img src={avatar} alt={`img of ${name}`} />
        </div>
        <div className={s.profile__infoBlock}>
          <Text>
            {name}, {`${age}`}
          </Text>
          <Text bold>{proffesion}</Text>
          <Text>{about}</Text>
        </div>
      </div>
      <Heading level={2}>Контакты</Heading>
      <div className={s.profile__contacts}>
        <Link href={telegram.url}>
          <TextWithIcon iconName='telegram'>{telegram.name}</TextWithIcon>
        </Link>
        <Link href={gitHub.url}>
          <TextWithIcon iconName='github'>{gitHub.name}</TextWithIcon>
        </Link>
        <TextWithIcon iconName='mail'>{mail.name}</TextWithIcon>
      </div>

      <Heading level={2}>Опыт работы</Heading>
      <div className={s.profile__experience}>
        {experience?.map(({ place, position, dateStart, dateEnd, tasks }) => (
          <div
            key={uuid()}
            className={`${s.profile__infoBlock} ${s.profile__infoBlock_withBorder}`}
          >
            <Heading level={4}>
              {place}, {position}
            </Heading>
            <Text bold>Задачи</Text>
            <div className={s.profile__taskList}>
              {tasks?.map((task) => (
                <TextWithIcon key={uuid()} iconName='lamp'>
                  {task}
                </TextWithIcon>
              ))}
            </div>
            <Text bold>Период</Text>
            <Text>
              {fromatDate(dateStart)}-{fromatDate(dateEnd)}
            </Text>
          </div>
        ))}
      </div>

      <Heading level={2}>Образование</Heading>
      <div className={s.profile__education}>
        {education?.map(({ place, direction, dateStart, dateEnd }) => (
          <div
            key={uuid()}
            className={`${s.profile__infoBlock} ${s.profile__infoBlock_withBorder}`}
          >
            <Heading level={4}>{place}</Heading>
            <Text>{direction}</Text>
            <Text>
              {fromatDate(dateStart)}-{fromatDate(dateEnd)}
            </Text>
          </div>
        ))}
        {additionalEducation?.map(
          ({ place, courseName, dateStart, dateEnd }) => (
            <div
              key={uuid()}
              className={`${s.profile__infoBlock} ${s.profile__infoBlock_withBorder}`}
            >
              <Heading level={4}>{place}</Heading>
              <Text>{courseName}</Text>
              <Text>
                {fromatDate(dateStart)}-{fromatDate(dateEnd)}
              </Text>
            </div>
          ),
        )}
      </div>
      <div>
        <div>
          <Heading level={3}>Ключевые навыки</Heading>
          <div className={s.profile__list}>
            {keySkills?.map((skill) => (
              <TextWithIcon
                bold
                key={uuid()}
                iconName='star'
                className={s.profile__textWithIcon}
              >
                {skill}
              </TextWithIcon>
            ))}
          </div>
        </div>
        <div>
          <Heading level={3}>Стек</Heading>
          <div className={s.profile__skillsBlock}>
            <ArrayComponentsDecorator className={s.profile__sillsDropButton}>
              {sortSkills(hardSkills)?.map(({ name: skillName, level }) => (
                <div key={uuid()} className={s.profile__skill}>
                  <Text className={s.profile__hardSkillText}>{skillName} </Text>
                  <Loadbar width={200} height={15} value={level / 5} />
                </div>
              ))}
            </ArrayComponentsDecorator>
          </div>
        </div>
        <div>
          <Heading level={3}>Надпрофессиональные компетен­ции</Heading>
          <div className={s.profile__skillsBlock}>
            <ArrayComponentsDecorator className={s.profile__sillsDropButton}>
              {sortSkills(softSkills)?.map(({ name: skillName, level }) => (
                <div key={uuid()} className={s.profile__skill}>
                  <Text className={s.profile__softSkillText}>{skillName} </Text>
                  <Loadbar width={200} height={15} value={level / 5} />
                </div>
              ))}
            </ArrayComponentsDecorator>
          </div>
        </div>
      </div>
      <div>
        <Heading level={2}>Достижения</Heading>
        <div className={s.profile__list}>
          {achievements?.map((achievement) => (
            <TextWithIcon
              key={uuid()}
              iconName='star'
              className={s.profile__textWithIcon}
            >
              {achievement}
            </TextWithIcon>
          ))}
        </div>
      </div>
      <div>
        <Heading level={2}>Внерабочие увлечения</Heading>
        <Text>{hobbys}</Text>
      </div>
    </div>
  );
};

export default Profile;
