import { Button, Col, Collapse, Drawer, Pagination, Row, Space } from "antd";
import React, { useState } from "react";
import moment from "moment";
import "./index.css";

const data = [
  {
    id: "06d1cbcb-8129-4ad4-a9d4-1f179c67cf0c",
    subject_id: 64,
    code: "CR-59-WGMWD",
    title: "CHỦ ĐỀ TEST VIDEO",
    type: 1,
    mediafiles: [
      {
        id: "c0b9cf91-b175-4a1b-bfec-2187f0212d64",
        name: "e3f79e3f-a555-48d6-b689-dd4803fd78aa.jpg",
      },
    ],
    author_info: { name: "Tác giả test video", title: "Phó Giám đốc" },
    published_date: "2021-03-19",
    summary: "Giới thiệu test",
    order: null,
    subjectTime: null,
    status: 2,
    meta: {},
    createdAt: "2021-03-19T03:04:19.015Z",
    updatedAt: "2021-03-19T03:09:47.498Z",
    parent_id: null,
    subjects_exams: [
      {
        id: "d25b75fd-c8ac-415f-9107-3ace71a98cb1",
        answers: [
          {
            id: "be110cdb-25aa-493b-84b8-51b4ae685873",
            choose_answers: [1],
          },
          {
            id: "5398d3d3-fcbf-488e-97eb-3a16ecab0793",
            choose_answers: [],
          },
          {
            id: "c5bf0268-b424-40f8-ac58-fc2591d10688",
            choose_answers: [1],
          },
          {
            id: "e7e03547-4669-4d8c-8dd2-cc3b348459ce",
            choose_answers: [1],
          },
          {
            id: "68c6148a-4ef0-4226-8e4f-a262bcc53f29",
            choose_answers: [1],
          },
        ],
        startTime: "2021-05-21T10:24:11.032Z",
        endTime: "2021-05-21T10:24:17.066Z",
        no_retries: 0,
        result: {
          status: -1,
          final_score: 80,
          total_question: 5,
          total_wrong_answers: 1,
          total_correct_answers: 4,
        },
        time: 1,
        type: 1,
        status: -2,
        meta: {},
        createdAt: "2021-05-21T10:24:11.036Z",
        updatedAt: "2021-05-21T10:24:17.067Z",
        exam_id: "fe228302-33fd-475c-860f-1ce131b890f3",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "06d1cbcb-8129-4ad4-a9d4-1f179c67cf0c",
      },
      {
        id: "eeefdb4b-8186-47f1-a55c-f1867f7f6684",
        answers: [
          {
            id: "c5bf0268-b424-40f8-ac58-fc2591d10688",
            choose_answers: [],
          },
          {
            id: "e7e03547-4669-4d8c-8dd2-cc3b348459ce",
            choose_answers: [],
          },
          {
            id: "be110cdb-25aa-493b-84b8-51b4ae685873",
            choose_answers: [],
          },
          {
            id: "5398d3d3-fcbf-488e-97eb-3a16ecab0793",
            choose_answers: [],
          },
          {
            id: "68c6148a-4ef0-4226-8e4f-a262bcc53f29",
            choose_answers: [],
          },
        ],
        startTime: "2021-05-21T10:24:18.249Z",
        endTime: "2021-05-21T10:24:26.508Z",
        no_retries: 1,
        result: {
          status: -1,
          final_score: 0,
          total_question: 5,
          total_wrong_answers: 5,
          total_correct_answers: 0,
        },
        time: 1,
        type: 1,
        status: -2,
        meta: {},
        createdAt: "2021-05-21T10:24:18.254Z",
        updatedAt: "2021-05-21T10:24:26.508Z",
        exam_id: "fe228302-33fd-475c-860f-1ce131b890f3",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "06d1cbcb-8129-4ad4-a9d4-1f179c67cf0c",
      },
      {
        id: "78c15548-afe4-4a12-beb3-7c8e5033afff",
        answers: [
          {
            id: "68c6148a-4ef0-4226-8e4f-a262bcc53f29",
            choose_answers: [2],
          },
          {
            id: "c5bf0268-b424-40f8-ac58-fc2591d10688",
            choose_answers: [1],
          },
          {
            id: "5398d3d3-fcbf-488e-97eb-3a16ecab0793",
            choose_answers: [1],
          },
          {
            id: "e7e03547-4669-4d8c-8dd2-cc3b348459ce",
            choose_answers: [1],
          },
          {
            id: "be110cdb-25aa-493b-84b8-51b4ae685873",
            choose_answers: [1],
          },
        ],
        startTime: "2021-05-21T10:24:18.251Z",
        endTime: "2021-05-21T10:24:25.414Z",
        no_retries: 1,
        result: {
          status: -1,
          final_score: 80,
          total_question: 5,
          total_wrong_answers: 1,
          total_correct_answers: 4,
        },
        time: 1,
        type: 1,
        status: -2,
        meta: {},
        createdAt: "2021-05-21T10:24:18.258Z",
        updatedAt: "2021-05-21T10:24:25.414Z",
        exam_id: "fe228302-33fd-475c-860f-1ce131b890f3",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "06d1cbcb-8129-4ad4-a9d4-1f179c67cf0c",
      },
      {
        id: "2b493c88-ba4f-4c0d-aae5-6f4ce95bd7f6",
        answers: [
          {
            id: "68c6148a-4ef0-4226-8e4f-a262bcc53f29",
            choose_answers: [],
          },
          {
            id: "be110cdb-25aa-493b-84b8-51b4ae685873",
            choose_answers: [],
          },
          {
            id: "c5bf0268-b424-40f8-ac58-fc2591d10688",
            choose_answers: [],
          },
          {
            id: "5398d3d3-fcbf-488e-97eb-3a16ecab0793",
            choose_answers: [],
          },
          {
            id: "e7e03547-4669-4d8c-8dd2-cc3b348459ce",
            choose_answers: [],
          },
        ],
        startTime: "2021-05-21T10:24:26.513Z",
        endTime: "2021-05-21T10:25:27.010Z",
        no_retries: 2,
        result: {
          status: -1,
          final_score: 0,
          total_question: 5,
          total_wrong_answers: 5,
          total_correct_answers: 0,
        },
        time: 1,
        type: 1,
        status: -2,
        meta: {},
        createdAt: "2021-05-21T10:24:26.519Z",
        updatedAt: "2021-05-21T10:25:27.010Z",
        exam_id: "fe228302-33fd-475c-860f-1ce131b890f3",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "06d1cbcb-8129-4ad4-a9d4-1f179c67cf0c",
      },
      {
        id: "d6b3e212-2205-42f2-b3c2-6e5ac85ea5e4",
        answers: [
          {
            id: "e7e03547-4669-4d8c-8dd2-cc3b348459ce",
            choose_answers: [],
          },
          {
            id: "68c6148a-4ef0-4226-8e4f-a262bcc53f29",
            choose_answers: [],
          },
          {
            id: "5398d3d3-fcbf-488e-97eb-3a16ecab0793",
            choose_answers: [],
          },
          {
            id: "be110cdb-25aa-493b-84b8-51b4ae685873",
            choose_answers: [],
          },
          {
            id: "c5bf0268-b424-40f8-ac58-fc2591d10688",
            choose_answers: [],
          },
        ],
        startTime: "2021-05-21T10:24:26.517Z",
        endTime: "2021-05-21T10:25:27.019Z",
        no_retries: 2,
        result: {
          status: -1,
          final_score: 0,
          total_question: 5,
          total_wrong_answers: 5,
          total_correct_answers: 0,
        },
        time: 1,
        type: 1,
        status: -2,
        meta: {},
        createdAt: "2021-05-21T10:24:26.527Z",
        updatedAt: "2021-05-21T10:25:27.019Z",
        exam_id: "fe228302-33fd-475c-860f-1ce131b890f3",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "06d1cbcb-8129-4ad4-a9d4-1f179c67cf0c",
      },
      {
        id: "27fcf783-3807-4240-b1eb-d97de861e23a",
        answers: [
          {
            id: "5398d3d3-fcbf-488e-97eb-3a16ecab0793",
            choose_answers: [1],
          },
          {
            id: "e7e03547-4669-4d8c-8dd2-cc3b348459ce",
            choose_answers: [2],
          },
          {
            id: "c5bf0268-b424-40f8-ac58-fc2591d10688",
            choose_answers: [2],
          },
          {
            id: "68c6148a-4ef0-4226-8e4f-a262bcc53f29",
            choose_answers: [2],
          },
          {
            id: "be110cdb-25aa-493b-84b8-51b4ae685873",
            choose_answers: [1],
          },
        ],
        startTime: "2021-07-17T02:54:12.465Z",
        endTime: "2021-07-17T02:54:21.496Z",
        no_retries: 0,
        result: {
          status: -1,
          final_score: 40,
          total_question: 5,
          total_wrong_answers: 3,
          total_correct_answers: 2,
        },
        time: 1,
        type: 1,
        status: -2,
        meta: { time_exam: 1 },
        createdAt: "2021-07-17T02:54:12.483Z",
        updatedAt: "2021-07-17T02:54:21.496Z",
        exam_id: "fe228302-33fd-475c-860f-1ce131b890f3",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "06d1cbcb-8129-4ad4-a9d4-1f179c67cf0c",
      },
      {
        id: "e9756fde-cb8c-415a-86f2-db7af838d0bd",
        answers: [
          {
            id: "e7e03547-4669-4d8c-8dd2-cc3b348459ce",
            choose_answers: [],
          },
          {
            id: "5398d3d3-fcbf-488e-97eb-3a16ecab0793",
            choose_answers: [],
          },
          {
            id: "be110cdb-25aa-493b-84b8-51b4ae685873",
            choose_answers: [],
          },
          {
            id: "c5bf0268-b424-40f8-ac58-fc2591d10688",
            choose_answers: [],
          },
          {
            id: "68c6148a-4ef0-4226-8e4f-a262bcc53f29",
            choose_answers: [],
          },
        ],
        startTime: "2021-07-17T02:55:11.906Z",
        endTime: "2021-07-17T02:55:47.834Z",
        no_retries: 1,
        result: {
          status: -1,
          final_score: 0,
          total_question: 5,
          total_wrong_answers: 5,
          total_correct_answers: 0,
        },
        time: 1,
        type: 1,
        status: -2,
        meta: { time_exam: 2 },
        createdAt: "2021-07-17T02:55:11.921Z",
        updatedAt: "2021-07-17T02:55:47.834Z",
        exam_id: "fe228302-33fd-475c-860f-1ce131b890f3",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "06d1cbcb-8129-4ad4-a9d4-1f179c67cf0c",
      },
      {
        id: "1fbba49b-1cc4-4315-858b-cf135f356298",
        answers: [
          {
            id: "5398d3d3-fcbf-488e-97eb-3a16ecab0793",
            choose_answers: [],
          },
          {
            id: "c5bf0268-b424-40f8-ac58-fc2591d10688",
            choose_answers: [],
          },
          {
            id: "be110cdb-25aa-493b-84b8-51b4ae685873",
            choose_answers: [],
          },
          {
            id: "e7e03547-4669-4d8c-8dd2-cc3b348459ce",
            choose_answers: [],
          },
          {
            id: "68c6148a-4ef0-4226-8e4f-a262bcc53f29",
            choose_answers: [],
          },
        ],
        startTime: "2021-07-17T02:55:47.859Z",
        endTime: "2021-07-17T02:56:48.019Z",
        no_retries: 2,
        result: {
          status: -1,
          final_score: 0,
          total_question: 5,
          total_wrong_answers: 5,
          total_correct_answers: 0,
        },
        time: 1,
        type: 1,
        status: -2,
        meta: { time_exam: 3 },
        createdAt: "2021-07-17T02:55:47.874Z",
        updatedAt: "2021-07-17T02:56:48.021Z",
        exam_id: "fe228302-33fd-475c-860f-1ce131b890f3",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "06d1cbcb-8129-4ad4-a9d4-1f179c67cf0c",
      },
      {
        id: "a68ae9cb-de42-4aa3-985e-c1a4eb382eb8",
        answers: [
          {
            id: "68c6148a-4ef0-4226-8e4f-a262bcc53f29",
            choose_answers: [1],
          },
          {
            id: "e7e03547-4669-4d8c-8dd2-cc3b348459ce",
            choose_answers: [1],
          },
          {
            id: "be110cdb-25aa-493b-84b8-51b4ae685873",
            choose_answers: [1],
          },
          {
            id: "c5bf0268-b424-40f8-ac58-fc2591d10688",
            choose_answers: [1],
          },
          {
            id: "5398d3d3-fcbf-488e-97eb-3a16ecab0793",
            choose_answers: [1],
          },
        ],
        startTime: "2021-11-16T16:49:42.108Z",
        endTime: "2021-11-16T16:49:50.849Z",
        no_retries: 1,
        result: {
          status: 1,
          final_score: 100,
          total_question: 5,
          total_wrong_answers: 0,
          total_correct_answers: 5,
        },
        time: 1,
        type: 1,
        status: 2,
        meta: { time_exam: 5 },
        createdAt: "2021-11-16T16:49:42.112Z",
        updatedAt: "2021-11-16T16:49:50.849Z",
        exam_id: "fe228302-33fd-475c-860f-1ce131b890f3",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "06d1cbcb-8129-4ad4-a9d4-1f179c67cf0c",
      },
      {
        id: "ac1cf7ea-02bb-409d-badc-3cea395d53c6",
        answers: [
          {
            id: "5398d3d3-fcbf-488e-97eb-3a16ecab0793",
            choose_answers: [2],
          },
          {
            id: "e7e03547-4669-4d8c-8dd2-cc3b348459ce",
            choose_answers: [2],
          },
          {
            id: "be110cdb-25aa-493b-84b8-51b4ae685873",
            choose_answers: [1],
          },
          {
            id: "68c6148a-4ef0-4226-8e4f-a262bcc53f29",
            choose_answers: [1],
          },
          {
            id: "c5bf0268-b424-40f8-ac58-fc2591d10688",
            choose_answers: [1],
          },
        ],
        startTime: "2021-10-28T10:09:24.023Z",
        endTime: "2021-10-28T10:09:37.396Z",
        no_retries: 0,
        result: {
          status: -1,
          final_score: 60,
          total_question: 5,
          total_wrong_answers: 2,
          total_correct_answers: 3,
        },
        time: 1,
        type: 1,
        status: -2,
        meta: { time_exam: 4 },
        createdAt: "2021-10-28T10:09:24.030Z",
        updatedAt: "2021-10-28T10:09:37.396Z",
        exam_id: "fe228302-33fd-475c-860f-1ce131b890f3",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "06d1cbcb-8129-4ad4-a9d4-1f179c67cf0c",
      },
    ],
    child_list: [
      {
        id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
        subject_id: 67,
        code: "CR-59-WGMWD-3",
        title: "Chương 3",
        mediafiles: [
          {
            id: "a06c18e5-8724-4a25-8efa-b05950bf8c5b",
            name: "Quy trình thực hành KSNK 2.pdf",
          },
        ],
        author_info: {
          name: "",
          image: null,
          title: "",
          hospital_name: "",
          department_name: "",
        },
        subjects_exams: [
          {
            id: "f9fbf6cb-04e2-45f0-b633-b3e59a130570",
            answers: [
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:10.016Z",
            endTime: "2021-05-17T09:15:10.612Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:10.022Z",
            updatedAt: "2021-05-17T09:15:10.612Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "c2ade85f-3bdd-4145-8db4-5f8b554e4d58",
            answers: [
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:10.618Z",
            endTime: "2021-05-17T09:15:11.309Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:10.621Z",
            updatedAt: "2021-05-17T09:15:11.309Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "faeef2c3-fae2-417b-bec0-89b89f43e485",
            answers: [
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:11.318Z",
            endTime: "2021-05-17T09:15:11.931Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:11.323Z",
            updatedAt: "2021-05-17T09:15:11.931Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "4f312604-ca4a-4773-bade-c1d199a7dc49",
            answers: [
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:17:39.925Z",
            endTime: "2021-05-17T09:18:06.964Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:17:39.929Z",
            updatedAt: "2021-05-17T09:18:06.965Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "706e7933-5104-4f8f-ba05-faae2104a752",
            answers: [
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [1],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [1],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [1],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [1],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [1],
              },
            ],
            startTime: "2021-05-21T10:24:01.820Z",
            endTime: "2021-05-21T10:24:07.747Z",
            no_retries: 0,
            result: {
              status: 1,
              final_score: 100,
              total_question: 5,
              total_wrong_answers: 0,
              total_correct_answers: 5,
            },
            time: 1,
            type: 2,
            status: 2,
            meta: {},
            createdAt: "2021-05-21T10:24:01.824Z",
            updatedAt: "2021-05-21T10:24:07.747Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "59d4c120-9e1d-4fd2-a7b2-4d189c239b7a",
            answers: [
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:18:06.972Z",
            endTime: "2021-05-17T09:18:07.647Z",
            no_retries: 2,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:18:06.978Z",
            updatedAt: "2021-05-17T09:18:07.647Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "98ecc8a0-2512-4747-969d-b3bcfe3fb1c2",
            answers: [
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:17:05.383Z",
            endTime: "2021-05-17T09:17:39.916Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:17:05.387Z",
            updatedAt: "2021-05-17T09:17:39.916Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "0a113bcb-35f4-44a7-97e2-55e7bfea104e",
            answers: [
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:17:00.250Z",
            endTime: "2021-05-17T09:17:05.374Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:17:00.256Z",
            updatedAt: "2021-05-17T09:17:05.374Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "09713b67-f602-4738-a6a0-9c318242452f",
            answers: [
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:39.638Z",
            endTime: "2021-05-17T09:16:40.008Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:39.642Z",
            updatedAt: "2021-05-17T09:16:40.008Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "2d590332-13ae-4fbe-82f1-4fd302ae17b5",
            answers: [
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:34.462Z",
            endTime: "2021-05-17T09:15:39.633Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:34.466Z",
            updatedAt: "2021-05-17T09:15:39.633Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "484fb099-bfea-4562-9c35-8a6e821107eb",
            answers: [
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:14.874Z",
            endTime: "2021-05-17T09:15:34.454Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:14.877Z",
            updatedAt: "2021-05-17T09:15:34.454Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "91c8a95b-0a80-42bf-b298-4e1b0bd0b246",
            answers: [
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:14.268Z",
            endTime: "2021-05-17T09:15:14.868Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:14.271Z",
            updatedAt: "2021-05-17T09:15:14.868Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "d15bb551-9a73-44d8-949c-740b7689bb4a",
            answers: [
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:13.703Z",
            endTime: "2021-05-17T09:15:14.261Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:13.707Z",
            updatedAt: "2021-05-17T09:15:14.261Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "1b144178-463c-4e22-8592-f751d21f1d73",
            answers: [
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:13.059Z",
            endTime: "2021-05-17T09:15:13.697Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:13.065Z",
            updatedAt: "2021-05-17T09:15:13.697Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "90cad680-52d3-49a8-ba86-9c149d2aa87f",
            answers: [
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:12.436Z",
            endTime: "2021-05-17T09:15:13.031Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:12.440Z",
            updatedAt: "2021-05-17T09:15:13.031Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "c2414851-66a2-4c0c-87c0-a72a8586f9ba",
            answers: [
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:11.937Z",
            endTime: "2021-05-17T09:15:12.429Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:11.941Z",
            updatedAt: "2021-05-17T09:15:12.429Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "10e0c0be-f6c7-4901-a6ee-4ebad1e8bb12",
            answers: [
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-18T09:14:39.328Z",
            endTime: "2021-05-17T09:15:09.498Z",
            no_retries: 0,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:09.498Z",
            updatedAt: "2021-05-17T09:15:09.498Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "d29011ca-ff06-450c-b219-e15010a41bb5",
            answers: [
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [1],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T07:43:17.435Z",
            endTime: "2021-05-17T07:43:39.352Z",
            no_retries: 0,
            result: {
              status: -1,
              final_score: 20,
              total_question: 5,
              total_wrong_answers: 4,
              total_correct_answers: 1,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T07:43:17.439Z",
            updatedAt: "2021-05-17T07:43:39.352Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "b982d3e6-5b7a-4ca4-9236-8136654ce6e0",
            answers: [
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T07:43:43.374Z",
            endTime: "2021-05-17T07:44:42.430Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T07:43:43.378Z",
            updatedAt: "2021-05-17T07:44:42.430Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "e959b2ca-15f6-4f2b-a2ee-c2ee51da3cb7",
            answers: [
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T07:43:43.374Z",
            endTime: "2021-05-17T07:44:44.011Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T07:43:43.377Z",
            updatedAt: "2021-05-17T07:44:44.011Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "983710b3-00e4-4123-94a9-6fc5480b8008",
            answers: [
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [2],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T08:56:40.908Z",
            endTime: "2021-05-17T08:56:44.351Z",
            no_retries: 2,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T08:56:40.914Z",
            updatedAt: "2021-05-17T08:56:44.351Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "c078a3e7-2488-4052-89ec-6d5530a31bc7",
            answers: [
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T08:56:40.908Z",
            endTime: "2021-05-17T08:56:56.155Z",
            no_retries: 2,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T08:56:40.912Z",
            updatedAt: "2021-05-17T08:56:56.155Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "0e1fa17a-b2ee-45b7-a6a0-a178910f4e03",
            answers: [
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T08:56:56.168Z",
            endTime: "2021-05-17T08:57:02.513Z",
            no_retries: 0,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T08:56:56.179Z",
            updatedAt: "2021-05-17T08:57:02.513Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "3c6221b4-f2eb-4e27-9669-4f013f6721a4",
            answers: [
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T08:56:56.166Z",
            endTime: "2021-05-17T08:57:57.006Z",
            no_retries: 0,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T08:56:56.174Z",
            updatedAt: "2021-05-17T08:57:57.007Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "10789542-41ce-4427-866a-4245caabb698",
            answers: [
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:02:30.030Z",
            endTime: "2021-05-17T09:02:46.417Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:02:30.036Z",
            updatedAt: "2021-05-17T09:02:46.417Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "8c4c476e-06b1-4141-9b0a-af16b97c91f9",
            answers: [
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:02:46.425Z",
            endTime: "2021-05-17T09:02:50.013Z",
            no_retries: 2,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:02:46.429Z",
            updatedAt: "2021-05-17T09:02:50.013Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "981b5ec0-d108-4b60-9f15-9bf0d31865fa",
            answers: [
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:02:50.031Z",
            endTime: "2021-05-17T09:02:54.557Z",
            no_retries: 0,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:02:50.043Z",
            updatedAt: "2021-05-17T09:02:54.558Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "36313897-9d23-4f84-877e-8669fdbf898f",
            answers: [
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:02:54.565Z",
            endTime: "2021-05-17T09:02:57.707Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:02:54.569Z",
            updatedAt: "2021-05-17T09:02:57.707Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "96cf2c90-f621-4320-af5d-c6d2982de3b2",
            answers: [
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:02:57.714Z",
            endTime: "2021-05-17T09:03:01.085Z",
            no_retries: 2,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:02:57.719Z",
            updatedAt: "2021-05-17T09:03:01.085Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "a3b39add-7a9f-4c7e-a7e9-f39be229e2d6",
            answers: [
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:03:01.093Z",
            endTime: "2021-05-17T09:04:02.008Z",
            no_retries: 0,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:03:01.100Z",
            updatedAt: "2021-05-17T09:04:02.008Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "edf3faeb-be33-49f4-882e-9af283556dd5",
            answers: [
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:04:32.222Z",
            endTime: "2021-05-17T09:04:33.445Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:04:32.230Z",
            updatedAt: "2021-05-17T09:04:33.445Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "573b07cf-ee55-401d-bc10-1519f87c3f08",
            answers: [
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:04:33.457Z",
            endTime: "2021-05-17T09:04:48.377Z",
            no_retries: 2,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:04:33.461Z",
            updatedAt: "2021-05-17T09:04:48.377Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "78ddbff7-5523-4357-b66f-f858a831326f",
            answers: [
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:04:48.385Z",
            endTime: "2021-05-17T09:04:57.818Z",
            no_retries: 0,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:04:48.390Z",
            updatedAt: "2021-05-17T09:04:57.818Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "e38fc123-71c4-4e7f-b47d-4500a111242b",
            answers: [
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:04:57.825Z",
            endTime: "2021-05-17T09:05:19.658Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:04:57.829Z",
            updatedAt: "2021-05-17T09:05:19.659Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "470e737f-631e-4f6e-b87f-d60aefc7175d",
            answers: [
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:05:19.674Z",
            endTime: "2021-05-17T09:05:28.695Z",
            no_retries: 2,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:05:19.679Z",
            updatedAt: "2021-05-17T09:05:28.696Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "a0082764-1e3c-4822-9701-3c4c605f75b8",
            answers: [
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:05:28.703Z",
            endTime: "2021-05-17T09:06:29.007Z",
            no_retries: 0,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:05:28.709Z",
            updatedAt: "2021-05-17T09:06:29.007Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "8bf818b5-dc11-4082-9573-6a20d91989a5",
            answers: [
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:13:49.005Z",
            endTime: "2021-05-17T09:13:49.916Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:13:49.010Z",
            updatedAt: "2021-05-17T09:13:49.916Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "0425a278-b444-4d61-8475-329406355a34",
            answers: [
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:13:49.923Z",
            endTime: "2021-05-17T09:13:50.545Z",
            no_retries: 2,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:13:49.927Z",
            updatedAt: "2021-05-17T09:13:50.545Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
          {
            id: "59f33307-cd2a-4c30-b56f-36bab8e18ef9",
            answers: [
              {
                id: "8723fb61-d136-4e4d-8ba5-d41cfa88a17c",
                choose_answers: [],
              },
              {
                id: "4cdeb91f-fefd-4067-912d-d696244f4ad1",
                choose_answers: [],
              },
              {
                id: "3c15a3f2-aeea-4825-b662-48cd085368e3",
                choose_answers: [],
              },
              {
                id: "974788f2-ff2c-4e48-b206-378e6278cc43",
                choose_answers: [],
              },
              {
                id: "cc69db8e-fb95-4c5e-bce4-d40deac8c5d7",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T09:15:09.507Z",
            endTime: "2021-05-17T09:15:10.011Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T09:15:09.515Z",
            updatedAt: "2021-05-17T09:15:10.011Z",
            exam_id: "1d8e8ded-7825-4cee-9470-6d0c66035279",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "a0356020-1d2f-4d19-bb8c-8e6c4755dda2",
          },
        ],
      },
      {
        id: "b98129a0-40d6-45db-ab85-1daa8dbbf181",
        subject_id: 65,
        code: "CR-59-WGMWD-1",
        title: "Chương test video",
        mediafiles: [],
        author_info: {
          name: "",
          image: null,
          title: "",
          hospital_name: "",
          department_name: "",
        },
        subjects_exams: [
          {
            id: "b967d213-a485-4d20-83f8-64f770f49329",
            answers: [
              {
                id: "16a6f563-d7c0-477e-8940-a5cb54d63b19",
                choose_answers: [1],
              },
              {
                id: "ab2b71c9-3998-46b3-b021-5d2c1d6ac7f1",
                choose_answers: [1],
              },
              {
                id: "edf179d5-ab2f-42bb-be43-4e20a9eea505",
                choose_answers: [1],
              },
              {
                id: "95017b5a-27be-4512-8782-879fb7c07d1f",
                choose_answers: [2],
              },
              {
                id: "7cd2e2e1-e658-4426-a6e0-93399dafa395",
                choose_answers: [1],
              },
            ],
            startTime: "2021-04-05T03:01:05.470Z",
            endTime: "2021-04-05T03:01:11.967Z",
            no_retries: 0,
            result: {
              status: 1,
              final_score: 100,
              total_question: 5,
              total_wrong_answers: 0,
              total_correct_answers: 5,
            },
            time: 1,
            type: 2,
            status: 2,
            meta: {},
            createdAt: "2021-04-05T03:01:05.472Z",
            updatedAt: "2021-04-05T03:01:11.967Z",
            exam_id: "fa62cba4-529b-4fd4-addd-1c1db58f7a2e",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "b98129a0-40d6-45db-ab85-1daa8dbbf181",
          },
        ],
      },
      {
        id: "5093eabc-f7e1-426a-b26f-62f04689144a",
        subject_id: 66,
        code: "CR-59-WGMWD-2",
        title: "Chương 2",
        mediafiles: [
          {
            id: "3315019c-2b83-489e-ac96-eb97193a355a",
            name: "Quy trình thực hành KSNK 1.pdf",
          },
        ],
        author_info: {
          name: "",
          image: null,
          title: "",
          hospital_name: "",
          department_name: "",
        },
        subjects_exams: [
          {
            id: "382e138b-f8cd-43f4-81f9-73494e70cc41",
            answers: [
              {
                id: "9e9cb072-6d43-4e88-b6f9-0650ceeed0c9",
                choose_answers: [1],
              },
              {
                id: "864e6be0-cff7-42e0-8b67-4debe33b5309",
                choose_answers: [1],
              },
              {
                id: "0e65fe6d-9034-49ff-b95f-362e012fd17c",
                choose_answers: [],
              },
              {
                id: "859b1421-cc3e-42ca-8d9d-4a109b52d53f",
                choose_answers: [],
              },
              {
                id: "d319baa1-be21-4c91-87d0-74da4e1eb9c3",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T02:25:40.064Z",
            endTime: "2021-05-17T02:26:39.262Z",
            no_retries: 0,
            result: {
              status: -1,
              final_score: 40,
              total_question: 5,
              total_wrong_answers: 3,
              total_correct_answers: 2,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T02:25:40.067Z",
            updatedAt: "2021-05-17T02:26:39.263Z",
            exam_id: "78135bf8-3e71-4b36-aed1-4feaf0a32e4d",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "5093eabc-f7e1-426a-b26f-62f04689144a",
          },
          {
            id: "e20f745f-5e34-4488-9c31-ed893072c846",
            answers: [
              {
                id: "864e6be0-cff7-42e0-8b67-4debe33b5309",
                choose_answers: [1],
              },
              {
                id: "d319baa1-be21-4c91-87d0-74da4e1eb9c3",
                choose_answers: [1],
              },
              {
                id: "0e65fe6d-9034-49ff-b95f-362e012fd17c",
                choose_answers: [1],
              },
              {
                id: "9e9cb072-6d43-4e88-b6f9-0650ceeed0c9",
                choose_answers: [1],
              },
              {
                id: "859b1421-cc3e-42ca-8d9d-4a109b52d53f",
                choose_answers: [1],
              },
            ],
            startTime: "2021-05-17T02:27:01.830Z",
            endTime: "2021-05-17T02:27:21.909Z",
            no_retries: 1,
            result: {
              status: 1,
              final_score: 100,
              total_question: 5,
              total_wrong_answers: 0,
              total_correct_answers: 5,
            },
            time: 1,
            type: 2,
            status: 2,
            meta: {},
            createdAt: "2021-05-17T02:27:01.835Z",
            updatedAt: "2021-05-17T02:27:21.909Z",
            exam_id: "78135bf8-3e71-4b36-aed1-4feaf0a32e4d",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "5093eabc-f7e1-426a-b26f-62f04689144a",
          },
          {
            id: "0a6e5acc-afbf-4fe2-a870-a0c1d5c0ab13",
            answers: [
              {
                id: "9e9cb072-6d43-4e88-b6f9-0650ceeed0c9",
                choose_answers: [],
              },
              {
                id: "864e6be0-cff7-42e0-8b67-4debe33b5309",
                choose_answers: [],
              },
              {
                id: "d319baa1-be21-4c91-87d0-74da4e1eb9c3",
                choose_answers: [],
              },
              {
                id: "0e65fe6d-9034-49ff-b95f-362e012fd17c",
                choose_answers: [],
              },
              {
                id: "859b1421-cc3e-42ca-8d9d-4a109b52d53f",
                choose_answers: [],
              },
            ],
            startTime: "2021-05-17T02:27:01.832Z",
            endTime: "2021-05-17T02:28:02.008Z",
            no_retries: 1,
            result: {
              status: -1,
              final_score: 0,
              total_question: 5,
              total_wrong_answers: 5,
              total_correct_answers: 0,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: {},
            createdAt: "2021-05-17T02:27:01.840Z",
            updatedAt: "2021-05-17T02:28:02.009Z",
            exam_id: "78135bf8-3e71-4b36-aed1-4feaf0a32e4d",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "5093eabc-f7e1-426a-b26f-62f04689144a",
          },
        ],
      },
    ],
  },
  {
    id: "5308493c-0861-47da-b484-6a33b24ef22b",
    subject_id: 88,
    code: "CR-59-YRVGQ",
    title: "Tên chủ đề 2711",
    type: 1,
    mediafiles: [],
    author_info: { name: "Tên tác giả", title: "Giám đốc" },
    published_date: "2021-11-27",
    summary: "Giới thiệu chủ đề",
    order: null,
    subjectTime: null,
    status: 2,
    meta: { lesson_total: 10 },
    createdAt: "2021-11-23T11:14:35.304Z",
    updatedAt: "2021-12-02T08:30:34.307Z",
    parent_id: null,
    subjects_exams: [
      {
        id: "690ab0ae-4e05-49e4-b011-6e9d2e0b482c",
        answers: [
          {
            id: "70873bfa-8876-430e-a4bf-a7936d64f290",
            name: "2",
            choose_answers: [1],
          },
          {
            id: "81db4956-e6fa-4596-9fe6-c933b64d7f80",
            name: "1",
            choose_answers: [1],
          },
          {
            id: "ea1a96c0-297c-4007-bd93-14e0a4d8a17e",
            name: "5",
            choose_answers: [1],
          },
          {
            id: "7f05812e-70c0-4998-9c6a-2d196bc4c40a",
            name: "4",
            choose_answers: [1],
          },
          {
            id: "9bd84e45-4448-49cf-86a2-bec2a8934a11",
            name: "3",
            choose_answers: [1],
          },
        ],
        startTime: "2021-12-17T09:22:37.767Z",
        endTime: "2021-12-17T09:22:50.374Z",
        no_retries: 0,
        result: {
          status: 1,
          final_score: 100,
          total_question: 5,
          total_wrong_answers: 0,
          total_correct_answers: 5,
        },
        time: 1,
        type: 1,
        status: 2,
        meta: { time_exam: 1 },
        createdAt: "2021-12-17T09:22:37.771Z",
        updatedAt: "2021-12-17T09:22:50.375Z",
        exam_id: "e0bdd68b-092f-440f-8944-c18e7d850cdb",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "5308493c-0861-47da-b484-6a33b24ef22b",
      },
    ],
    child_list: [
      {
        id: "c2ecf44a-5f4d-4277-83d2-dbb3713656ab",
        subject_id: 95,
        code: "CR-59-YRVGQ-1",
        title: "1",
        mediafiles: [],
        author_info: {
          name: "",
          image: null,
          title: "",
          hospital_name: "",
          department_name: "",
        },
        subjects_exams: [
          {
            id: "e1209734-b653-4895-b871-df2fa48872b7",
            answers: [
              {
                id: "70873bfa-8876-430e-a4bf-a7936d64f290",
                name: "2",
                choose_answers: [1],
              },
              {
                id: "81db4956-e6fa-4596-9fe6-c933b64d7f80",
                name: "1",
                choose_answers: [1],
              },
              {
                id: "9bd84e45-4448-49cf-86a2-bec2a8934a11",
                name: "3",
                choose_answers: [1],
              },
              {
                id: "7f05812e-70c0-4998-9c6a-2d196bc4c40a",
                name: "4",
                choose_answers: [1],
              },
              {
                id: "ea1a96c0-297c-4007-bd93-14e0a4d8a17e",
                name: "5",
                choose_answers: [1],
              },
            ],
            startTime: "2021-12-17T09:21:21.169Z",
            endTime: "2021-12-17T09:21:31.542Z",
            no_retries: 1,
            result: {
              status: 1,
              final_score: 100,
              total_question: 5,
              total_wrong_answers: 0,
              total_correct_answers: 5,
            },
            time: 1,
            type: 2,
            status: 2,
            meta: { time_exam: 2 },
            createdAt: "2021-12-17T09:21:21.173Z",
            updatedAt: "2021-12-17T09:21:31.542Z",
            exam_id: "f45b2eb8-fd18-4b84-bf52-b102aff289c4",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "c2ecf44a-5f4d-4277-83d2-dbb3713656ab",
          },
          {
            id: "6abc12e5-6def-47d9-a501-ee3114325011",
            answers: [
              {
                id: "9bd84e45-4448-49cf-86a2-bec2a8934a11",
                name: "3",
                choose_answers: [1],
              },
              {
                id: "7f05812e-70c0-4998-9c6a-2d196bc4c40a",
                name: "4",
                choose_answers: [1],
              },
              {
                id: "81db4956-e6fa-4596-9fe6-c933b64d7f80",
                name: "1",
                choose_answers: [1],
              },
              {
                id: "70873bfa-8876-430e-a4bf-a7936d64f290",
                name: "2",
                choose_answers: [],
              },
              {
                id: "ea1a96c0-297c-4007-bd93-14e0a4d8a17e",
                name: "5",
                choose_answers: [1],
              },
            ],
            startTime: "2021-12-17T09:20:58.968Z",
            endTime: "2021-12-17T09:21:07.694Z",
            no_retries: 0,
            result: {
              status: -1,
              final_score: 80,
              total_question: 5,
              total_wrong_answers: 1,
              total_correct_answers: 4,
            },
            time: 1,
            type: 2,
            status: -2,
            meta: { time_exam: 1 },
            createdAt: "2021-12-17T09:20:58.974Z",
            updatedAt: "2021-12-17T09:21:07.695Z",
            exam_id: "f45b2eb8-fd18-4b84-bf52-b102aff289c4",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "c2ecf44a-5f4d-4277-83d2-dbb3713656ab",
          },
        ],
      },
    ],
  },
  {
    id: "67b21a6f-753b-4f93-8d56-cf9f12d3c2c6",
    subject_id: 154,
    code: "CR-59-1SHKX",
    title: "Test 0212",
    type: 1,
    mediafiles: [],
    author_info: { name: "Admin", title: "Phó Giám đốc" },
    published_date: "2021-12-02",
    summary: "",
    order: null,
    subjectTime: null,
    status: 2,
    meta: { lesson_total: 10 },
    createdAt: "2021-12-02T08:33:32.175Z",
    updatedAt: "2021-12-30T07:39:07.797Z",
    parent_id: null,
    subjects_exams: [
      {
        id: "7e6a8f08-fc4e-428f-82fe-beb312460f3b",
        answers: [
          {
            id: "ed9bc610-58dc-41ba-aef9-7e1d71f6c88e",
            name: "1.1",
            choose_answers: [4],
          },
          {
            id: "59d5f2f0-9eaf-433b-a3f2-6ed09094b375",
            name: "3",
            choose_answers: [4],
          },
          {
            id: "a8e46266-d961-48da-9d8a-8b2ac5c782fe",
            name: "1",
            choose_answers: [4],
          },
          {
            id: "23036c78-2136-4001-a825-6754c7a6ed5c",
            name: "1.4",
            choose_answers: [4],
          },
          {
            id: "d61ec765-8c30-4f07-b6c0-2a0e1be23bbd",
            name: "1.2",
            choose_answers: [4],
          },
        ],
        startTime: "2021-12-02T08:38:56.926Z",
        endTime: "2021-12-02T08:39:05.887Z",
        no_retries: 0,
        result: {
          status: 1,
          final_score: 100,
          total_question: 5,
          total_wrong_answers: 0,
          total_correct_answers: 5,
        },
        time: 1,
        type: 1,
        status: 2,
        meta: { time_exam: 1 },
        createdAt: "2021-12-02T08:38:56.929Z",
        updatedAt: "2021-12-02T08:39:05.887Z",
        exam_id: "4506f5ab-9028-4c06-a0ab-84b9e786fad3",
        member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
        subject_id: "67b21a6f-753b-4f93-8d56-cf9f12d3c2c6",
      },
    ],
    child_list: [
      {
        id: "e40464a3-b66d-4923-b285-87c33948e3c4",
        subject_id: 155,
        code: "CR-59-1SHKX-1",
        title: "Chương 1",
        mediafiles: [],
        author_info: {
          name: "",
          image: null,
          title: "",
          hospital_name: "",
          department_name: "",
        },
        subjects_exams: [
          {
            id: "fba89664-20cc-429d-b7e9-89c8534f6d7b",
            answers: [
              {
                id: "a8e46266-d961-48da-9d8a-8b2ac5c782fe",
                name: "1",
                choose_answers: [4],
              },
              {
                id: "d61ec765-8c30-4f07-b6c0-2a0e1be23bbd",
                name: "1.2",
                choose_answers: [4],
              },
              {
                id: "ed9bc610-58dc-41ba-aef9-7e1d71f6c88e",
                name: "1.1",
                choose_answers: [4],
              },
              {
                id: "062175a9-fead-4910-93d9-9ee579588a77",
                name: "1.5",
                choose_answers: [4],
              },
              {
                id: "23036c78-2136-4001-a825-6754c7a6ed5c",
                name: "1.4",
                choose_answers: [4],
              },
            ],
            startTime: "2021-12-02T08:38:30.759Z",
            endTime: "2021-12-02T08:38:38.214Z",
            no_retries: 0,
            result: {
              status: 1,
              final_score: 100,
              total_question: 5,
              total_wrong_answers: 0,
              total_correct_answers: 5,
            },
            time: 1,
            type: 2,
            status: 2,
            meta: { time_exam: 1 },
            createdAt: "2021-12-02T08:38:30.761Z",
            updatedAt: "2021-12-02T08:38:38.214Z",
            exam_id: "3fd1f9cd-f9c5-4349-ade5-125d3bfcd10f",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "e40464a3-b66d-4923-b285-87c33948e3c4",
          },
        ],
      },
      {
        id: "07ef8cd2-2859-40eb-967d-601a4dbaf356",
        subject_id: 156,
        code: "CR-59-1SHKX-2",
        title: "Chương 2",
        mediafiles: [],
        author_info: {
          name: "",
          image: null,
          title: "",
          hospital_name: "",
          department_name: "",
        },
        subjects_exams: [
          {
            id: "5ab4db22-f9b7-4a82-9443-5c40d534e250",
            answers: [
              {
                id: "59d5f2f0-9eaf-433b-a3f2-6ed09094b375",
                name: "3",
                choose_answers: [4],
              },
              {
                id: "f6908afa-d0dc-49d4-9f53-ae18cd3774c2",
                name: "5",
                choose_answers: [4],
              },
              {
                id: "e438adf5-0838-45cb-bd22-4247dc16ebdd",
                name: "1",
                choose_answers: [4],
              },
              {
                id: "0fcc8e30-fe54-4c4b-bf3b-04a741f6e02d",
                name: "4",
                choose_answers: [4],
              },
              {
                id: "0f5900d9-12e7-48f2-b0fd-41f14c15d40a",
                name: "2",
                choose_answers: [4],
              },
            ],
            startTime: "2021-12-02T08:38:47.008Z",
            endTime: "2021-12-02T08:38:53.435Z",
            no_retries: 0,
            result: {
              status: 1,
              final_score: 100,
              total_question: 5,
              total_wrong_answers: 0,
              total_correct_answers: 5,
            },
            time: 1,
            type: 2,
            status: 2,
            meta: { time_exam: 1 },
            createdAt: "2021-12-02T08:38:47.010Z",
            updatedAt: "2021-12-02T08:38:53.435Z",
            exam_id: "970bf83f-3f66-4bdd-8e1c-af22bfe827fe",
            member_id: "155dcc40-9cad-44de-8315-6856441b48e9",
            subject_id: "07ef8cd2-2859-40eb-967d-601a4dbaf356",
          },
        ],
      },
    ],
  },
];

export default function TabResult() {
  const [visible, setVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");
  const [drawerData, setDrawerData] = useState([]);

  return (
    <div className="tab-result">
      <h3>Danh sách kết quả bài thi</h3>
      <Row style={{ marginTop: 15, marginBottom: 15 }}>
        <Pagination
          style={{ marginLeft: "auto" }}
          simple
          defaultCurrent={1}
          total={2}
        />
      </Row>
      <Collapse ghost className="tab-result-collapse">
        {data.map((subject) => (
          <Collapse.Panel header={subject?.title} key={subject?.id}>
            {subject?.child_list?.map((child) => (
              <Space key={child?.id} className="tab-result-space">
                <span>{child?.title}</span>
                <Button
                  onClick={() => {
                    setDrawerTitle(child?.title);
                    setDrawerData(child?.subjects_exams);
                    setVisible(true);
                  }}
                  type="link"
                >
                  <span className="link-hover">Xem kết quả</span>
                </Button>
              </Space>
            ))}
          </Collapse.Panel>
        ))}
      </Collapse>
      <Row style={{ marginTop: 15 }}>
        <Pagination
          style={{ marginLeft: "auto" }}
          simple
          defaultCurrent={1}
          total={2}
        />
      </Row>
      <Drawer
        title={drawerTitle}
        placement="right"
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
        className='tab-result-drawer'
      >
        {drawerData.map((exam, index) => (
          <div style={{ margin: "40px 0" }}>
            <Row gutter={[0, 10]}>
              <Col span={8}>
                <span
                  style={{
                    color: exam?.result?.status === 1 ? "#008000" : "red",
                  }}
                >
                  Lần thi thứ {index + 1}
                </span>
              </Col>
              <Col span={16}>
                {exam?.result?.status === 1 && (
                  <b style={{ color: "#008000" }}>Pass</b>
                )}
                {exam?.result?.status === -1 && (
                  <b style={{ color: "red" }}>Fail</b>
                )}
              </Col>
              <Col span={8}>Kết quả</Col>
              <Col span={16}>
                <b>
                  {exam?.result?.total_correct_answers} /{" "}
                  {exam?.result?.total_question} ({exam?.result?.final_score}%)
                </b>
              </Col>
              <Col span={8}>Ngày thi</Col>
              <Col span={16}>
                <b>{moment(exam?.startTime).format("DD/MM/YYYY HH:mm:ss")}</b>
              </Col>
            </Row>
          </div>
        ))}
      </Drawer>
    </div>
  );
}
