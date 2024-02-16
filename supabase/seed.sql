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
    auth.users (
        instance_id
        ,id
        ,aud
        ,role
        ,email
        ,encrypted_password
        ,confirmation_token
        ,confirmation_sent_at
        ,raw_app_meta_data
        ,raw_user_meta_data
        ,created_at
        ,updated_at
        )
values
    (
        '00000000-0000-0000-0000-000000000000'::uuid
        ,'ac2fbd37-6f6b-469b-8ea9-72ebbd91cbb8'::uuid
        ,'authenticated'
        ,'authenticated'
        ,'test.user@aidpioneers.com'
        ,'$2a$10$3sUm3VHgi2j/BWZbHmBTJeZ7hLkd9SHdJlmWWv30U8GgiCJwQ4ram' /* Password123 */
        ,'811c1ec831131e9d56e6bd83546cd6e140080596cae1f2381087d701'
        ,'2023-12-28 19:53:53.701273+00'
        ,'{"provider": "email", "providers": ["email"]}'
        ,'{"first_name": "Mae","last_name": "Martin"}'
        ,now()
        ,now()
    );

insert into
    public.shipment (id, project_id, destination_id, origin_id, donor_id, status_id)
values
    (1, 1, 238,235, 1, 1);

insert into
    public.pallet (id, shipment_id)
values
    (1, 1);
