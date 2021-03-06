import React, { useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import ENDPOINTS from '../../endpoints';
import PATHNAMES from '../../pathnames';
import { Layout } from '../../atoms';
import { Field } from '../../organisms';
import { translatedValidations } from '../../utils';
import { LobbyAvailablePlayersTable } from './LobbyAvailablePlayersTable';
import { Button } from 'reactstrap';
import { BeforeDraftLobbyDetail } from './BeforeDraftLobbyDetail';

export const DraftNotStarted = ({
  lobbyPlayersList,
  draftState,
  userIsGroupOwner,
  positions,
  teams,
  lobbyDetailInfo,
  userCount,
  notAcceptedInvitation,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { lobbyId } = useParams();

  const onSubmitMemoized = useCallback(
    ({ draftRoundLimit }) => {
      draftState.request(ENDPOINTS.startDraft(lobbyId), {
        method: 'POST',
        data: { draftRoundLimit },
        onSuccess: () => {
          history.push(PATHNAMES.getDraftDetail(lobbyId));
        },
      });
    },
    [draftState, lobbyId, history],
  );

  const { object, numberMin } = translatedValidations(t);

  const schema = object({
    draftRoundLimit: numberMin(60),
  });

  return (
    <>
      <BeforeDraftLobbyDetail
        lobbyDetailInfo={lobbyDetailInfo}
        userCount={userCount}
        notAcceptedInvitation={notAcceptedInvitation}
        userIsGroupOwner={userIsGroupOwner}
      />
      <LobbyAvailablePlayersTable
        lobbyPlayersList={lobbyPlayersList}
        positions={positions}
        teams={teams}
      />

      {userIsGroupOwner && (
        <Layout pt3 flex justify-center>
          <Formik
            initialValues={{ draftRoundLimit: '90' }}
            validationSchema={schema}
            onSubmit={onSubmitMemoized}
          >
            <Form>
              <Field
                type="number"
                name="draftRoundLimit"
                label={t('Page.LobbyDetail.DraftNotStarted.DraftRoundLimit')}
                placeholder={t(
                  'Page.LobbyDetail.DraftNotStarted.DraftRoundLimitPlaceholder',
                )}
              />

              <Layout flex justify-center>
                <Button type="submit" color="primary">
                  {t('Page.LobbyDetail.DraftNotStarted.StartDraft')}
                </Button>
              </Layout>
            </Form>
          </Formik>
        </Layout>
      )}
    </>
  );
};
