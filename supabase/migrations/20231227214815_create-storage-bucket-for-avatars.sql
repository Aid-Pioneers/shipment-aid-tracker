insert into storage.buckets
  (id, name, public, file_size_limit, allowed_mime_types)
values
  ('avatars', 'avatars', false, 2097152, '{"image/jpeg", "image/png"}')
on conflict do nothing;