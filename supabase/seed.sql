insert into
    public.consignee_partner (name)
values
    ('Consignee Partner 1'),
    ('Consignee Partner 2'),
    ('Consignee Partner 3');

insert into
    public.donor (name)
values
    ('Donor 1'),
    ('Donor 2'),
    ('Donor 3');

insert into
    public.project (name)
values
    ('Ukraine'),
    ('Turkey'),
    ('Lebanon'),
    ('Sierra Leone');

insert into
    public.shipment (project_id, destination_id, origin_id, donor_id, status_id)
values
    (1, 238,235, 1, 1);

insert into
    public.pallet (id, shipment_id)
values
    (1, 1);

-- seed two users:
-- jon.doe@aidpioneers - a donor
-- jane.doe@aidpioneers - a manager

insert into auth.users (
    instance_id
    ,id
    ,aud
    ,role
    ,email
    ,encrypted_password
    ,email_confirmed_at
    ,invited_at
    ,confirmation_token
    ,confirmation_sent_at
    ,recovery_token
    ,recovery_sent_at
    ,email_change_token_new
    ,email_change
    ,email_change_sent_at
    ,last_sign_in_at
    ,raw_app_meta_data
    ,raw_user_meta_data
    ,is_super_admin
    ,created_at
    ,updated_at
    ,phone
    ,phone_confirmed_at
    ,phone_change
    ,phone_change_token
    ,phone_change_sent_at
    ,email_change_token_current
    ,email_change_confirm_status
    ,banned_until
    ,reauthentication_token
    ,reauthentication_sent_at
    ,is_sso_user
    ,deleted_at
) values (
    '00000000-0000-0000-0000-000000000000'
    ,'9f28f76e-e7cb-48ef-9838-8075d4fed06f'
    ,'authenticated'
    ,'authenticated'
    ,'jon.doe@aidpioneers.com'
    ,'$2a$10$N/ezF2EMzLsZ5tPfmNm/7e.pCozFiaPm9g0THHboKyw.mSpO3HUqy' /* Password123 */
    ,current_timestamp
    ,null
    ,''
    ,null
    ,''
    ,null
    ,''
    ,''
    ,null
    ,current_timestamp
    ,'{"provider": "email" ,"providers": ["email"]}'
    ,'{"last_name": "Jon","first_name": "Doe"}'
    ,null
    ,current_timestamp
    ,current_timestamp
    ,null
    ,null
    ,''
    ,''
    ,null
    ,''
    ,0
    ,null
    ,''
    ,null
    ,false
    ,null
    ),
    (
    '00000000-0000-0000-0000-000000000000'
    ,'225f5db4-9551-4ba2-9638-9f94745b4007'
    ,'authenticated'
    ,'authenticated'
    ,'jane.doe@aidpioneers.com'
    ,'$2a$10$gwa3Od2m/QMcJ1PcgZZfC.5Te/fiN.6tmgvcvRBPUfaDA0GYZslR.' /* Password123 */
    ,current_timestamp
    ,null
    ,''
    ,null
    ,''
    ,null
    ,''
    ,''
    ,null
    ,current_timestamp
    ,'{"provider": "email" ,"providers": ["email"]}'
    ,'{"last_name": "Jane","first_name": "Doe"}'
    ,null
    ,current_timestamp
    ,current_timestamp
    ,null
    ,null
    ,''
    ,''
    ,null
    ,''
    ,0
    ,null
    ,''
    ,null
    ,false
    ,null
    )
    ;

insert into auth.identities (
    provider_id
    ,user_id
    ,identity_data
    ,provider
    ,last_sign_in_at
    ,created_at
    ,updated_at
    ,id
) values (
    '9f28f76e-e7cb-48ef-9838-8075d4fed06f'
    ,'9f28f76e-e7cb-48ef-9838-8075d4fed06f'
    ,'{"sub": "9f28f76e-e7cb-48ef-9838-8075d4fed06f", "email": "jon.doe@aidpioneers.com", "email_verified": false, "phone_verified": false}'
    ,'email'
    ,current_timestamp
    ,current_timestamp
    ,current_timestamp
    ,'84efa341-3a92-4d0f-9106-820bfb9f20a1'
    ),
    (
    '225f5db4-9551-4ba2-9638-9f94745b4007'
    ,'225f5db4-9551-4ba2-9638-9f94745b4007'
    ,'{"sub": "225f5db4-9551-4ba2-9638-9f94745b4007", "email": "jane.doe@aidpioneers.com", "email_verified": false, "phone_verified": false}'
    ,'email'
    ,current_timestamp
    ,current_timestamp
    ,current_timestamp
    ,'d7ac68ed-3651-41d8-a3e7-9f273f8b091b'
    );

insert into public.profile_role (
    profile_id
    ,role_id
) values
    ('9f28f76e-e7cb-48ef-9838-8075d4fed06f', 2)
    ,('225f5db4-9551-4ba2-9638-9f94745b4007', 1);